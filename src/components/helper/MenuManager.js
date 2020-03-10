import {  faHome,  faTools,  faDatabase,  faSearch,  faShieldAlt,  faBell,
    faPowerOff,  faInfo, faArrowDown, faChevronDown, faColumns} from "@fortawesome/free-solid-svg-icons";

export const menuList=[
        {mainMenu:"transaction",displayText:"Transactions",icon:faDatabase,
            subMenu:[{displayText:'End of day',url:''},
                    {displayText:'Application Data Entry',url:'/applicatioDataEntry'},
                    {displayText:'Application Validation',url:''},
                    {displayText:'List of Enrolled Cardholders',url:''},
                    {displayText:'List of Unenrolled Cardholders',url:''},
                    {displayText:'Batch Updating of Enrollment',url:''},
                    {displayText:'Batch Auto Enrollment',url:''},
                    {displayText:'Manual Updating of Dis/Enrollment Status',url:''},
                    {displayText:'Upload Billing File',url:'/transaction/uploadBilling'},
                    {displayText:'Merchant Extract',url:''},
                    {displayText:'Merchant Batch Upload',url:''},
                    {displayText:'Merchant Batch Update',url:''},
                    {displayText:'Declined Billing Letter Generation',url:''}
                ],
        },
        
        {mainMenu:"utilities",displayText:"Utilities",icon:faTools,
                subMenu:[{displayText:'Intitution Reference',url:'/institutionIndex'}, 
                                            {displayText:'Product Reference',url:''},
                                            {displayText:'Dis/Enrollment Reason Code',url:''},
                                            {displayText:'Cadencie Decline Reason Code',url:''},
                                            {displayText:'Card ProductType',url:''},
                                            {displayText:'Reports/Letter Management',url:''},
                                            {displayText:'Application Record',url:''}
                                    ]
    },
    {mainMenu:"security",displayText:"Security", icon:faShieldAlt,subMenu:[]

    },
    {mainMenu:"inquiry",displayText:"Inquiry",icon:faSearch,subMenu:[]

    },
    // {mainMenu:"dashboard",displayText:"Dashboard",icon:faColumns,subMenu:[]

    // }
];

// const criteria=(item)=>{
//     menuList.filter(x=>x.mainMenu.startsWith("transaction"))
//     item.mainMenu==
// }

export const MenuManager=(text)=> {
    let result=menuList.find(x=>x.mainMenu.startsWith(text));
    return result;
}
