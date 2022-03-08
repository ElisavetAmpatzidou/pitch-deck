export const initParams = [
  {
    name: "Default",
    value: {
      styles:{
        accent:"#f4f4f4",
        secondary:"#ff4343",
        primary:"#202020",
        font:"Outfit"
      },
      intro: {
        slogan:"Write your company name above and an intriguing summary of what your company does here.",
        name:"Pitch Deck",
      },
      problem:{
        title:"Problem",
        subtitle:"List 1-3 problems your company observes and wants to solve.",
        list:[
          { 
            title:"Problem 1",
            description:"Give a striking overview of the problem and explain it briefly."
          },
          { 
            title:"Problem 2",
            description:"Give a striking overview of the problem and explain it briefly."
          },
          { 
            title:"Problem 3",
            description:"Give a striking overview of the problem and explain it briefly."
          },  
        ]
      },
      solution:{
        title:"The Utopia",
        subtitle:"List 1-3 ways your company proposes to solve them.",
        list:[
          { 
            title:"Solution 1",
            description:"Describe how you envision to solve the problemsyou previously shared."
          },
          { 
            title:"Solution 2",
            description:"Communicate big value conveniences and be truly straight forward."
          },
          { 
            title:"Solution 3",
            description:"Be very clear so you can smoothly jump next to introducing your product."
          },  
        ]
      },
      product:{
        title:"Product or Service",
        description:"Introduce your company's product or service as the ultimate solution to these problems",
        img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/robot.png?raw=true"
      },
      timeline:{
        title:"Birth of Productor Service",
        subtitle:"A simple timeline on how your product or service came to be a helpful way to visualizing your origin story. What frusrations or ideas led to this?",
        steps:[
          {
            title:"Step 1",
            date:"2020"
          },
          {
            title:"Step 2",
            date:"2021"
          },
          {
            title:"Step 3",
            date:"2022"
          },
        ]
      },
      timing:{
        title:"Timing",
        reasons:[
          {
            title:"Reason 1",
            description:"List 1-3 reasons to explain your decision about timing."
          },
          {
            title:"Reason 2",
            description:'Why is "now" the best time for your company to rise and go to the next level?',
          },
          {
            title:"Reason 3",
            description:"What arre the trends these days that make your product or service possible?"
          }
        ],
        img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/startup.jpeg?raw=true"
      },
      traction:{
        title:"Traction",
        subtitle:"Where is your company currently at? Visualize with a graph to highlight important developments.",  
        graphData:{
          title:"",
          maxValue:40,
          dataSets:[
            {
              "title": "PhaseA",
              "color": "#ff1f4c"
            },
            {
              "title": "PhaseB",
              "color": "#ff82ad"
            }
          ],
          data:[
            {
              "name": "Id1",
              "values": [10, 18]
            },
            {
              "name": "Id2",
              "values": [15, 27]
            },
            {
              "name": "Id3",
              "values": [29, 23]
            },
            {
              "name": "Id4",
              "values": [31, 35]
            },
            {
              "name": "Id5",
              "values": [29, 23]
            },
            {
              "name": "Id6",
              "values": [15, 27]
            },
            {
              "name": "Id7",
              "values": [10, 18]
            }
          ],
        }
      },
      targetMarket:{
        title:"Target Market",
        subtitle:"Who are the customers you want to care to?",
        img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/target-market.jpeg?raw=true",
        list:[
          {
            title:"Target Market 1",
            description:"List 1-3 profiles who are interest about your product or service"
          },
          {
            title:"Target Market 2",
            description:"What are their profiles and visual personas?"
          },
          {
            title:"Target Market 3",
            description:"Visualize the people who will turn to you for solutions."
          }
        ]
      },
      marketSize:{
        title:"Size the Market",
        subtitle:"Apply the two ways to size the market - top down or bottom up. Some sizing jargons are TAM, SAM, and SOM.",
        list:[
          {
            number: "1.9 Billion",
            tag:"Total Available Market (TAM)"
          },
          {
            number: "53 M",
            tag:"Serviceable Available Market (SAM)"
          },
          {
            number: "10.6 M",
            tag:"Serviceable Obtainable Market (SOM)"
          },
        ]
      },
      competitors:{
        dCompetitors:{
          title:"Direct Competitors",
          list:[
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm1.png?raw=true",
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm2.png?raw=true",
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm3.png?raw=true"
          ]
        },
        iCompetitors:{
          title:"Indirect Competitors",
          list:[
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm4.png?raw=true",
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm5.png?raw=true",
            "https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/cm6.png?raw=true"
          ]
        }
      },
      competiveAdvantages:{
        title:"Competive Advantages",
        list:[
          {
            title:"Advantage 1",
            description:"Visualize your competive advantages using a quadrant for easy scanning."
          },
          {
            title:"Advantage 2",
            description:"How is the landscape differentiated and what makes you different."
          },
          {
            title:"Advantage 3",
            description:"What can you do better than your competition? How will you outperfom them?"
          },
          {
            title:"Advantage 4",
            description:"A company with strong competitive advantages are likely to survive in the long term."
          }
        ]
      },
      cApproach:{
        title:"Competitor Approach",
        list:[
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/approach1.png?raw=true",
            title:"Approach 1",
            description:"How will you set your company from the competition?"
          },
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/approach2.png?raw=true",
            title:"Approach 2",
            description:"What's your path to reach your customers?"
          },
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/approach3.png?raw=true",
            title:"Approach 3",
            description:"Events, partnerships, ads - list the effective ways to reach them."
          }
        ]
      },
      model:{
        title:"Business or Revenue Model",
        subtitle:"Show the ways your company plans to make money.",
        list:[
          "Whether through a graph, timeline, or chart, present the viability of your product or service and tell how your company will operate, make money and achieve goal.",
          "If you have plenty of ways to make maoney, focus on one main method, such as subscription, ads and transactions.",
          "Touch up on metrics here too, such as Life Time Value (LTV) and Customer Acquisition Cost (CAC)."
        ]
      },
      team:{
        title:"The Team",
        list:[
          {
            img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/member1.jpeg?raw=true",
            title:"Team Member 1",
            subtitle:"Title"
          },
          {
            img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/member2.jpeg?raw=true",
            title:"Team Member 2",
            subtitle:"Title"
          },
          {
            img:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/member3.jpeg?raw=true",
            title:"Team Member 3",
            subtitle:"Title"
          }
        ]
      },
      future:{
        title:"Future Roadmap",
        subtitle:"What are your next steps and goals? How much support do you need form investors and what will it get you?",
        steps:[
          {
            title:"Step1",
            description:"Q1 2022"
          },
          {
            title:"Step2",
            description:"Q2 2022"
          },
          {
            title:"Step3",
            description:"Q3 2022"
          },
          {
            title:"Step4",
            description:"Q4 2022"
          }
        ]
      },
      contact:{
        title:"Contact Us",
        list:[
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/phone.png?raw=true",
            info:"012-345-6789"
          },
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/mail.png?raw=true",
            info:"hello@contact.com"
          },
          {
            icon:"https://github.com/donkeyclip/pitch-deck/blob/main/demo/assets/website.png?raw=true",
            info:"www.hello.com"
          }
        ]
      },
      dots:16
    },
  },
 
];
