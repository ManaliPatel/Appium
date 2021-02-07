
const config = {
  'qa' : {
    base_url: 'https://qa.bim360ops.com/'
  },
  'staging' : {
    base_url: 'https://staging.bim360ops.com/',
  },
  'prod' : {
    base_url: 'https://ops.autodeskbuildingops.com/'
  },
  'sim' : {
    base_url: 'https://demo.sim.bim360ops.com/'
  },
  'dev2' : {
    base_url: 'https://dev2.bim360ops.com/'
  },
  'data' : {
    slaGroup1: {
      group: 'Availability',
      category: 'unavailable'
    },
    sla1: {
      name: 'Test1',
      group: 'Availability',
      priority: 'Urgent',
      category: 'awesome'
    },
    ticket1: {
     description: "Hello1"
    },
    ticket2: {
     description: "Hello2"
    },
    checklist1: {
      name: "checklist1",
      item1: "c1_item1",
      item2: "c2_item2"
    },
    groupticket1: {
      description: "New Group Ticket 1"
    },
    groupticket2: {
      description: "New Group Ticket 2"
    },
    groupticketholder: {
      description: "Group Ticket"
    },
    contact: {
    email: "automationuser121@bim360ops.com",
    first_name: "automation12",
    last_name: "user12",
    phone_number: '999-999-9999'
    }
  }
}

module.exports = config;
