import { nanoid } from "nanoid";

const initialBoardId = nanoid();
export default {
  activeBoard: {
    name: "Platform Launch",
    id: initialBoardId,
    columns: ["Todo", "Doing", "Done"],
    tasks: [
      {
        title: "Build UI for onboarding flow",
        description: "",
        status: "Todo",
        id: nanoid(),
        subtasks: [
          {
            title: "Sign up page",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Sign in page",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title: "Welcome page",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Build UI for search",
        description: "",
        status: "Todo",
        id: nanoid(),
        subtasks: [
          {
            title: "Search page",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Build settings UI",
        description: "",
        status: "Todo",
        id: nanoid(),
        subtasks: [
          {
            title: "Account page",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title: "Billing page",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "QA and test all major user journeys",
        description:
          "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
        status: "Todo",
        id: nanoid(),
        subtasks: [
          {
            title: "Internal testing",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title: "External testing",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Add search enpoints",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Add search endpoint",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Define search filters",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Add authentication endpoints",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Define user model",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Add auth endpoints",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title:
          "Research pricing points of various competitors and trial different business models",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Research competitor pricing and business models",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Outline a business model that works for our solution",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title:
              "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Conduct 5 wireframe tests",
        description:
          "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Complete 5 wireframe prototype tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Create wireframe prototype",
        description:
          "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Create clickable wireframe prototype in Balsamiq",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Review results of usability tests and iterate",
        description:
          "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Meet to review notes from previous tests and plan changes",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Make changes to paper prototypes",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Conduct 5 usability tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        description: "",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Create paper prototypes for version one",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Complete 10 usability tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Market discovery",
        description:
          "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Interview 10 prospective customers",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Competitor analysis",
        description: "",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Find direct and indirect competitors",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Design settings and search pages",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Settings - Account page",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Settings - Billing page",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Search page",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Add account management endpoints",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Upgrade plan",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Cancel plan",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Update payment method",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Design onboarding flow",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Sign up page",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Sign in page",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title: "Welcome page",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Add search enpoints",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Add search endpoint",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Define search filters",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Add authentication endpoints",
        description: "",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Define user model",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Add auth endpoints",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title:
          "Research pricing points of various competitors and trial different business models",
        description:
          "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
        status: "Doing",
        id: nanoid(),
        subtasks: [
          {
            title: "Research competitor pricing and business models",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Outline a business model that works for our solution",
            isCompleted: false,
            id: nanoid(),
          },
          {
            title:
              "Talk to potential customers about our proposed solution and ask for fair price expectancy",
            isCompleted: false,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Conduct 5 wireframe tests",
        description:
          "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Complete 5 wireframe prototype tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Create wireframe prototype",
        description:
          "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Create clickable wireframe prototype in Balsamiq",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Review results of usability tests and iterate",
        description:
          "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Meet to review notes from previous tests and plan changes",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Make changes to paper prototypes",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Conduct 5 usability tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title:
          "Create paper prototypes and conduct 10 usability tests with potential customers",
        description: "",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Create paper prototypes for version one",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Complete 10 usability tests",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Market discovery",
        description:
          "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Interview 10 prospective customers",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Competitor analysis",
        description: "",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Find direct and indirect competitors",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "SWOT analysis for each competitor",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
      {
        title: "Research the market",
        description:
          "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
        status: "Done",
        id: nanoid(),
        subtasks: [
          {
            title: "Write up research analysis",
            isCompleted: true,
            id: nanoid(),
          },
          {
            title: "Calculate TAM",
            isCompleted: true,
            id: nanoid(),
          },
        ],
      },
    ],
  },
  boards: [
    {
      name: "Platform Launch",
      id: initialBoardId,
      columns: ["Todo", "Doing", "Done"],
      tasks: [
        {
          title: "Build UI for onboarding flow",
          description: "",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Sign up page",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Sign in page",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Welcome page",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Build UI for search",
          description: "",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Search page",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Build settings UI",
          description: "",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Account page",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Billing page",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "QA and test all major user journeys",
          description:
            "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Internal testing",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "External testing",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Add search enpoints",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Add search endpoint",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Define search filters",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Add authentication endpoints",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Define user model",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Add auth endpoints",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title:
            "Research pricing points of various competitors and trial different business models",
          description:
            "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Research competitor pricing and business models",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Outline a business model that works for our solution",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title:
                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Conduct 5 wireframe tests",
          description:
            "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Complete 5 wireframe prototype tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Create wireframe prototype",
          description:
            "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Create clickable wireframe prototype in Balsamiq",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Review results of usability tests and iterate",
          description:
            "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title:
                "Meet to review notes from previous tests and plan changes",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Make changes to paper prototypes",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Conduct 5 usability tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title:
            "Create paper prototypes and conduct 10 usability tests with potential customers",
          description: "",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Create paper prototypes for version one",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Complete 10 usability tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Market discovery",
          description:
            "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Interview 10 prospective customers",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Competitor analysis",
          description: "",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Find direct and indirect competitors",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Design settings and search pages",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Settings - Account page",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Settings - Billing page",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Search page",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Add account management endpoints",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Upgrade plan",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Cancel plan",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Update payment method",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Design onboarding flow",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Sign up page",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Sign in page",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Welcome page",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Add search enpoints",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Add search endpoint",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Define search filters",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Add authentication endpoints",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Define user model",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Add auth endpoints",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title:
            "Research pricing points of various competitors and trial different business models",
          description:
            "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Research competitor pricing and business models",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Outline a business model that works for our solution",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title:
                "Talk to potential customers about our proposed solution and ask for fair price expectancy",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Conduct 5 wireframe tests",
          description:
            "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Complete 5 wireframe prototype tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Create wireframe prototype",
          description:
            "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Create clickable wireframe prototype in Balsamiq",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Review results of usability tests and iterate",
          description:
            "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title:
                "Meet to review notes from previous tests and plan changes",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Make changes to paper prototypes",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Conduct 5 usability tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title:
            "Create paper prototypes and conduct 10 usability tests with potential customers",
          description: "",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Create paper prototypes for version one",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Complete 10 usability tests",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Market discovery",
          description:
            "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Interview 10 prospective customers",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Competitor analysis",
          description: "",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Find direct and indirect competitors",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "SWOT analysis for each competitor",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Research the market",
          description:
            "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
          status: "Done",
          id: nanoid(),
          subtasks: [
            {
              title: "Write up research analysis",
              isCompleted: true,
              id: nanoid(),
            },
            {
              title: "Calculate TAM",
              isCompleted: true,
              id: nanoid(),
            },
          ],
        },
      ],
    },
    {
      name: "Marketing Plan",
      columns: ["Todo", "Doing", "Done"],
      id: nanoid(),
      tasks: [
        {
          title: "Plan Product Hunt launch",
          description: "",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Find hunter",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Gather assets",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Draft product page",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Notify customers",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Notify network",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Launch!",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },

        {
          title: "Share on Show HN",
          description: "",
          status: "Doing",
          id: nanoid(),
          subtasks: [
            {
              title: "Draft out HN post",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Get feedback and refine",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Publish post",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },

        {
          title: "Write launch article to publish on multiple channels",
          description: "",
          status: "",
          id: nanoid(),
          subtasks: [
            {
              title: "Write article",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Publish on LinkedIn",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Publish on Inndie Hackers",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Publish on Medium",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
      ],
    },

    {
      name: "Roadmap",
      columns: ["Todo", "Doing", "Done"],
      id: nanoid(),
      tasks: [
        {
          title: "Launch version one",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Launch privately to our waitlist",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Launch publicly on PH, HN, etc.",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
        {
          title: "Review early feedback and plan next steps for roadmap",
          description:
            "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
          status: "Todo",
          id: nanoid(),
          subtasks: [
            {
              title: "Interview 10 customers",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Review common customer pain points and suggestions",
              isCompleted: false,
              id: nanoid(),
            },
            {
              title: "Outline next steps for our roadmap",
              isCompleted: false,
              id: nanoid(),
            },
          ],
        },
      ],
    },
  ],
};
