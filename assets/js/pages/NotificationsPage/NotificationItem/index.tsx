//
// Automatically generated with mix operate.gen.notification.items.index
// Do not edit this file manually
//

import * as React from "react";

import CommentAdded from "./CommentAdded"
import DiscussionCommentSubmitted from "./DiscussionCommentSubmitted"
import DiscussionPosting from "./DiscussionPosting"
import GoalArchived from "./GoalArchived"
import GoalCheckIn from "./GoalCheckIn"
import GoalCheckInAcknowledgement from "./GoalCheckInAcknowledgement"
import GoalClosing from "./GoalClosing"
import GoalCreated from "./GoalCreated"
import GoalEditing from "./GoalEditing"
import GoalTimeframeEditing from "./GoalTimeframeEditing"
import ProjectArchived from "./ProjectArchived"
import ProjectCheckInAcknowledged from "./ProjectCheckInAcknowledged"
import ProjectCheckInCommented from "./ProjectCheckInCommented"
import ProjectCheckInSubmitted from "./ProjectCheckInSubmitted"
import ProjectClosed from "./ProjectClosed"
import ProjectContributorAddition from "./ProjectContributorAddition"
import ProjectCreated from "./ProjectCreated"
import ProjectDiscussionSubmitted from "./ProjectDiscussionSubmitted"
import ProjectGoalConnection from "./ProjectGoalConnection"
import ProjectGoalDisconnection from "./ProjectGoalDisconnection"
import ProjectMilestoneCommented from "./ProjectMilestoneCommented"
import ProjectMoved from "./ProjectMoved"
import ProjectPausing from "./ProjectPausing"
import ProjectRenamed from "./ProjectRenamed"
import ProjectResuming from "./ProjectResuming"
import ProjectReviewAcknowledged from "./ProjectReviewAcknowledged"
import ProjectReviewCommented from "./ProjectReviewCommented"
import ProjectReviewRequestSubmitted from "./ProjectReviewRequestSubmitted"
import ProjectReviewSubmitted from "./ProjectReviewSubmitted"
import ProjectTimelineEdited from "./ProjectTimelineEdited"

export default function NotificationItem({notification}) : JSX.Element | null {
  const activityType = notification.activity.content.__typename;

  switch (activityType) {
    case "ActivityContentCommentAdded":
      return <CommentAdded notification={notification} />;
    
    case "ActivityContentDiscussionCommentSubmitted":
      return <DiscussionCommentSubmitted notification={notification} />;
    
    case "ActivityContentDiscussionPosting":
      return <DiscussionPosting notification={notification} />;
    
    case "ActivityContentGoalArchived":
      return <GoalArchived notification={notification} />;
    
    case "ActivityContentGoalCheckIn":
      return <GoalCheckIn notification={notification} />;
    
    case "ActivityContentGoalCheckInAcknowledgement":
      return <GoalCheckInAcknowledgement notification={notification} />;
    
    case "ActivityContentGoalClosing":
      return <GoalClosing notification={notification} />;
    
    case "ActivityContentGoalCreated":
      return <GoalCreated notification={notification} />;
    
    case "ActivityContentGoalEditing":
      return <GoalEditing notification={notification} />;
    
    case "ActivityContentGoalTimeframeEditing":
      return <GoalTimeframeEditing notification={notification} />;
    
    case "ActivityContentProjectArchived":
      return <ProjectArchived notification={notification} />;
    
    case "ActivityContentProjectCheckInAcknowledged":
      return <ProjectCheckInAcknowledged notification={notification} />;
    
    case "ActivityContentProjectCheckInCommented":
      return <ProjectCheckInCommented notification={notification} />;
    
    case "ActivityContentProjectCheckInSubmitted":
      return <ProjectCheckInSubmitted notification={notification} />;
    
    case "ActivityContentProjectClosed":
      return <ProjectClosed notification={notification} />;
    
    case "ActivityContentProjectContributorAddition":
      return <ProjectContributorAddition notification={notification} />;
    
    case "ActivityContentProjectCreated":
      return <ProjectCreated notification={notification} />;
    
    case "ActivityContentProjectDiscussionSubmitted":
      return <ProjectDiscussionSubmitted notification={notification} />;
    
    case "ActivityContentProjectGoalConnection":
      return <ProjectGoalConnection notification={notification} />;
    
    case "ActivityContentProjectGoalDisconnection":
      return <ProjectGoalDisconnection notification={notification} />;
    
    case "ActivityContentProjectMilestoneCommented":
      return <ProjectMilestoneCommented notification={notification} />;
    
    case "ActivityContentProjectMoved":
      return <ProjectMoved notification={notification} />;
    
    case "ActivityContentProjectPausing":
      return <ProjectPausing notification={notification} />;
    
    case "ActivityContentProjectRenamed":
      return <ProjectRenamed notification={notification} />;
    
    case "ActivityContentProjectResuming":
      return <ProjectResuming notification={notification} />;
    
    case "ActivityContentProjectReviewAcknowledged":
      return <ProjectReviewAcknowledged notification={notification} />;
    
    case "ActivityContentProjectReviewCommented":
      return <ProjectReviewCommented notification={notification} />;
    
    case "ActivityContentProjectReviewRequestSubmitted":
      return <ProjectReviewRequestSubmitted notification={notification} />;
    
    case "ActivityContentProjectReviewSubmitted":
      return <ProjectReviewSubmitted notification={notification} />;
    
    case "ActivityContentProjectTimelineEdited":
      return <ProjectTimelineEdited notification={notification} />;
    
    default:
      console.error("unhandled activity type, notification:", notification.id, "activity", notification.activity.id);
      return null;
  }
}
