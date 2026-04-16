export type BlogDetail = {
  slug: string;
  schemaType?: "HowTo";
  howTo?: {
    totalTime?: string;
    tools?: string[];
    steps: Array<{
      name: string;
      text: string;
    }>;
  };
};

export const BLOG_DETAILS: Record<string, BlogDetail> = {
  "how-to-set-up-gohighlevel-missed-call-text-back": {
    slug: "how-to-set-up-gohighlevel-missed-call-text-back",
    schemaType: "HowTo",
    howTo: {
      totalTime: "PT30M",
      tools: ["GoHighLevel account (Starter plan or above)", "A2P 10DLC SMS registration for US SMS"],
      steps: [
        {
          name: "Navigate to Automations in GoHighLevel",
          text: "Log into your GoHighLevel account, open Automation in the left sidebar, and click Create Workflow to start a new workflow.",
        },
        {
          name: "Set your trigger to Missed Call",
          text: "Add a Missed Call trigger so the workflow fires every time an inbound call goes unanswered.",
        },
        {
          name: "Add a Send SMS action",
          text: "Add a Send SMS step and write your missed call text-back message, ideally short enough to stay within a single SMS segment.",
        },
        {
          name: "Configure working-hours logic",
          text: "Add an If/Else condition before the SMS action so callers receive one message during business hours and another after hours.",
        },
        {
          name: "Test with a real missed call",
          text: "Call your GoHighLevel number from a test phone, let it ring through, and confirm the SMS fires quickly and the conversation record is created correctly.",
        },
      ],
    },
  },
};
