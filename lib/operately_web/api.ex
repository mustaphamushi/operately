defmodule OperatelyWeb.Api do
  use TurboConnect.Api

  plug OperatelyWeb.Api.Plugs.RequireAuthenticatedAccount, except: [
    {:query, :get_invitation},
    {:mutation, :add_first_company},
    {:mutation, :join_company},
    {:mutation, :create_email_activation_code},
    {:mutation, :create_account}
  ]

  use_types OperatelyWeb.Api.Types

  alias OperatelyWeb.Api.Queries, as: Q
  alias OperatelyWeb.Api.Mutations, as: M
  alias OperatelyWeb.Api.Subscriptions, as: S

  query :get_account, Q.GetAccount
  query :get_activities, Q.GetActivities
  query :get_activity, Q.GetActivity
  query :get_assignments_count, Q.GetAssignmentsCount
  query :get_assignments, Q.GetAssignments
  query :get_comments, Q.GetComments
  query :get_companies, Q.GetCompanies
  query :get_company, Q.GetCompany
  query :get_discussion, Q.GetDiscussion
  query :get_discussions, Q.GetDiscussions
  query :get_goal, Q.GetGoal
  query :get_goal_progress_update, Q.GetGoalProgressUpdate
  query :get_goal_progress_updates, Q.GetGoalProgressUpdates
  query :get_goals, Q.GetGoals
  query :get_invitation, Q.GetInvitation
  query :get_key_resource, Q.GetKeyResource
  query :get_me, Q.GetMe
  query :get_milestone, Q.GetMilestone
  query :get_notifications, Q.GetNotifications
  query :get_people, Q.GetPeople
  query :get_person, Q.GetPerson
  query :get_project, Q.GetProject
  query :get_project_check_in, Q.GetProjectCheckIn
  query :get_project_check_ins, Q.GetProjectCheckIns
  query :get_projects, Q.GetProjects
  query :get_project_contributor, Q.GetProjectContributor
  query :get_project_retrospective, Q.GetProjectRetrospective
  query :get_space, Q.GetSpace
  query :get_spaces, Q.GetSpaces
  query :get_task, Q.GetTask
  query :get_tasks, Q.GetTasks
  query :get_binded_people, Q.GetBindedPeople
  query :get_unread_notification_count, Q.GetUnreadNotificationCount
  query :get_resource_hub, Q.GetResourceHub
  query :get_resource_hub_document, Q.GetResourceHubDocument
  query :get_resource_hub_file, Q.GetResourceHubFile
  query :get_resource_hub_folder, Q.GetResourceHubFolder
  query :list_space_tools, Q.ListSpaceTools
  query :search_people, Q.SearchPeople
  query :search_potential_space_members, Q.SearchPotentialSpaceMembers
  query :search_project_contributor_candidates, Q.SearchProjectContributorCandidates

  mutation :archive_message, M.ArchiveMessage
  mutation :restore_company_member, M.RestoreCompanyMember
  mutation :add_company, M.AddCompany
  mutation :add_company_admins, M.AddCompanyAdmins
  mutation :add_company_member, M.AddCompanyMember
  mutation :add_company_owners, M.AddCompanyOwners
  mutation :add_company_trusted_email_domain, M.AddCompanyTrustedEmailDomain
  mutation :add_first_company, M.AddFirstCompany
  mutation :add_space_members, M.AddSpaceMembers
  mutation :add_key_resource, M.AddKeyResource
  mutation :add_project_contributor, M.AddProjectContributor
  mutation :add_project_contributors, M.AddProjectContributors
  mutation :add_reaction, M.AddReaction

  mutation :create_account, M.CreateAccount
  mutation :create_blob, M.CreateBlob
  mutation :create_comment, M.CreateComment
  mutation :create_goal, M.CreateGoal
  mutation :create_goal_discussion, M.CreateGoalDiscussion
  mutation :create_space, M.CreateSpace
  mutation :create_project, M.CreateProject
  mutation :create_task, M.CreateTask
  mutation :create_resource_hub, M.CreateResourceHub
  mutation :create_resource_hub_document, M.CreateResourceHubDocument
  mutation :create_resource_hub_file, M.CreateResourceHubFile
  mutation :create_resource_hub_folder, M.CreateResourceHubFolder
  mutation :create_email_activation_code, M.CreateEmailActivationCode

  mutation :delete_resource_hub_document, M.DeleteResourceHubDocument
  mutation :delete_resource_hub_file, M.DeleteResourceHubFile
  mutation :delete_resource_hub_folder, M.DeleteResourceHubFolder

  mutation :remove_company_admin, M.RemoveCompanyAdmin
  mutation :remove_company_member, M.RemoveCompanyMember
  mutation :remove_company_trusted_email_domain, M.RemoveCompanyTrustedEmailDomain
  mutation :remove_group_member, M.RemoveGroupMember
  mutation :remove_key_resource, M.RemoveKeyResource
  mutation :remove_project_contributor, M.RemoveProjectContributor
  mutation :remove_project_milestone, M.RemoveProjectMilestone
  mutation :remove_company_owner, M.RemoveCompanyOwner

  mutation :edit_company, M.EditCompany
  mutation :edit_comment, M.EditComment
  mutation :edit_discussion, M.EditDiscussion
  mutation :edit_goal, M.EditGoal
  mutation :edit_goal_discussion, M.EditGoalDiscussion
  mutation :edit_goal_progress_update, M.EditGoalProgressUpdate
  mutation :edit_goal_timeframe, M.EditGoalTimeframe
  mutation :edit_space, M.EditSpace
  mutation :edit_key_resource, M.EditKeyResource
  mutation :edit_project_check_in, M.EditProjectCheckIn
  mutation :edit_project_name, M.EditProjectName
  mutation :edit_project_permissions, M.EditProjectPermissions
  mutation :edit_project_retrospective, M.EditProjectRetrospective
  mutation :edit_project_timeline, M.EditProjectTimeline
  mutation :edit_resource_hub_document, M.EditResourceHubDocument
  mutation :edit_space_members_permissions, M.EditSpaceMembersPermissions
  mutation :edit_space_permissions, M.EditSpacePermissions
  mutation :edit_subscriptions_list, M.EditSubscriptionsList
  mutation :rename_resource_hub_folder, M.RenameResourceHubFolder

  mutation :disconnect_goal_from_project, M.DisconnectGoalFromProject
  mutation :join_space, M.JoinSpace
  mutation :join_company, M.JoinCompany
  mutation :mark_all_notifications_as_read, M.MarkAllNotificationsAsRead
  mutation :mark_notification_as_read, M.MarkNotificationAsRead
  mutation :mark_notifications_as_read, M.MarkNotificationsAsRead
  mutation :move_project_to_space, M.MoveProjectToSpace
  mutation :new_invitation_token, M.NewInvitationToken
  mutation :pause_project, M.PauseProject
  mutation :post_discussion, M.PostDiscussion
  mutation :publish_discussion, M.PublishDiscussion
  mutation :post_goal_progress_update, M.PostGoalProgressUpdate
  mutation :post_milestone_comment, M.PostMilestoneComment
  mutation :post_project_check_in, M.PostProjectCheckIn

  mutation :acknowledge_goal_progress_update, M.AcknowledgeGoalProgressUpdate
  mutation :acknowledge_project_check_in, M.AcknowledgeProjectCheckIn
  mutation :archive_goal, M.ArchiveGoal
  mutation :archive_project, M.ArchiveProject
  mutation :close_goal, M.CloseGoal
  mutation :close_project, M.CloseProject
  mutation :connect_goal_to_project, M.ConnectGoalToProject

  mutation :change_password, M.ChangePassword
  mutation :change_goal_parent, M.ChangeGoalParent
  mutation :change_task_description, M.ChangeTaskDescription

  mutation :reopen_goal, M.ReopenGoal
  mutation :resume_project, M.ResumeProject
  mutation :subscribe_to_notifications, M.SubscribeToNotifications
  mutation :unsubscribe_from_notifications, M.UnsubscribeFromNotifications
  mutation :update_milestone, M.UpdateMilestone
  mutation :update_milestone_description, M.UpdateMilestoneDescription
  mutation :update_profile, M.UpdateProfile
  mutation :update_project_contributor, M.UpdateProjectContributor
  mutation :update_project_description, M.UpdateProjectDescription
  mutation :update_task, M.UpdateTask
  mutation :update_task_status, M.UpdateTaskStatus

  subscription :assignments_count, S.AssignmentsCount
  subscription :discussion_comments, S.DiscussionComments
  subscription :unread_notifications_count, S.UnreadNotificationsCount
  subscription :profile_updated, S.ProfileUpdated
end
