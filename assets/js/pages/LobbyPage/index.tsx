import * as Api from "@/api";
import * as React from "react";
import * as Pages from "@/components/Pages";
import * as Icons from "@tabler/icons-react";

import { OperatelyLogo } from "@/components/OperatelyLogo";
import { DivLink, Link } from "@/components/Link";

import classnames from "classnames";
import { Paths } from "@/routes/paths";
import plurarize from "@/utils/plurarize";

interface LoaderResult {
  companies: Api.Company[];
}

export async function loader(): Promise<LoaderResult> {
  return {
    companies: await Api.getCompanies({
      includeMemberCount: true,
    }).then((res) => res.companies!),
  };
}

export function Page() {
  const { companies } = Pages.useLoadedData<LoaderResult>();

  return (
    <Pages.Page title={"Lobby"}>
      <div className="m-12">
        <OperatelyLogo width="32px" height="32px" />
        <div className="font-medium mt-8">Hey there! How's it going?</div>
        <div className="font-medium">Select one of your organizations below to get started:</div>
        <CompanyCards companies={companies} />
        <AdminsAndDevLinks />
      </div>
    </Pages.Page>
  );
}

function AdminsAndDevLinks() {
  if (!window.appConfig.showDevBar) return null;

  const adminLink = (
    <Link to="/admin" className="font-medium">
      Admin Panel
    </Link>
  );

  const designLink = (
    <Link to="/__design__" className="font-medium">
      Design System
    </Link>
  );

  return (
    <div className="font-medium mt-8">
      Or, visit the {adminLink} or the {designLink}.
    </div>
  );
}

function CompanyCards({ companies }: { companies: Api.Company[] }) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}

      <AddCompanyCard />
    </div>
  );
}

function CompanyCard({ company }: { company: Api.Company }) {
  const className = classnames(
    "cursor-pointer",
    "rounded-lg",
    "bg-surface-base",
    "px-4 py-3 w-64",
    "border border-surface-outline",
    "relative",
    "hover:shadow transition-shadow",
  );

  return (
    <DivLink to={Paths.companyHomePath(company.id!)} className={className}>
      <Icons.IconBuildingEstate size={40} className="text-cyan-500" strokeWidth={1} />
      <div className="font-medium mt-2">{company.name}</div>
      <div className="text-xs">{plurarize(company.memberCount!, "member", "members")}</div>
    </DivLink>
  );
}

function AddCompanyCard() {
  const className = classnames(
    "cursor-pointer",
    "rounded-lg",
    "bg-accent-1",
    "text-white-1",
    "px-4 py-3 w-64",
    "border border-surface-outline",
    "relative",
    "hover:shadow transition-shadow",
  );

  return (
    <DivLink to={Paths.newCompanyPath()} className={className} testId="add-company-card">
      <div className="font-bold text-lg">+ Create new</div>
      <div className="text-sm font-medium">Add new organization</div>
      <div className="flex justify-end mt-3">
        <Icons.IconSparkles size={32} className="text-white-1" strokeWidth={1} />
      </div>
    </DivLink>
  );
}
