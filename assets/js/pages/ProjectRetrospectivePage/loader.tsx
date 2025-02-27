import * as Pages from "@/components/Pages";
import * as Projects from "@/models/projects";

interface LoaderResult {
  retrospective: Projects.ProjectRetrospective;
}

export async function loader({ params }): Promise<LoaderResult> {
  return {
    retrospective: await Projects.getProjectRetrospective({
      projectId: params.projectID,
      includeAuthor: true,
      includeProject: true,
      includeClosedAt: true,
      includePermissions: true,
      includeReactions: true,
      includePotentialSubscribers: true,
      includeSubscriptionsList: true,
      includeUnreadNotifications: true,
    }).then((data) => data.retrospective!),
  };
}

export function useLoadedData(): LoaderResult {
  return Pages.useLoadedData() as LoaderResult;
}

export function useRefresh() {
  return Pages.useRefresh();
}
