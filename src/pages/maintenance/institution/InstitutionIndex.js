import React from 'react'
import Page from './../../../components/Page';
import InstitutionList from './../../../components/maintenance/institution/InstitutionList';
import {Link} from 'react-router-dom'
import CustomCard from '../../../components/CustomCard';
import { IconButton } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AccountBalance } from '@material-ui/icons';
const data=[{
    "id": 1,
    "institutionName": "Izio",
    "institutionCode": "65923-102"
  }, {
    "id": 2,
    "institutionName": "Youspan",
    "institutionCode": "62257-365"
  }, {
    "id": 3,
    "institutionName": "Blogtags",
    "institutionCode": "10096-0212"
  }, {
    "id": 4,
    "institutionName": "Leexo",
    "institutionCode": "33261-129"
  }, {
    "id": 5,
    "institutionName": "Skinix",
    "institutionCode": "49741-1004"
  }, {
    "id": 6,
    "institutionName": "Flashdog",
    "institutionCode": "68428-116"
  }, {
    "id": 7,
    "institutionName": "Jabberstorm",
    "institutionCode": "63940-359"
  }, {
    "id": 8,
    "institutionName": "Kazu",
    "institutionCode": "60505-2665"
  }, {
    "id": 9,
    "institutionName": "Realblab",
    "institutionCode": "63323-180"
  }, {
    "id": 10,
    "institutionName": "Ailane",
    "institutionCode": "64735-080"
  }, {
    "id": 11,
    "institutionName": "Jabbersphere",
    "institutionCode": "55154-0906"
  }, {
    "id": 12,
    "institutionName": "Dazzlesphere",
    "institutionCode": "41190-974"
  }, {
    "id": 13,
    "institutionName": "Bluejam",
    "institutionCode": "0054-0109"
  }, {
    "id": 14,
    "institutionName": "Flipstorm",
    "institutionCode": "52125-463"
  }, {
    "id": 15,
    "institutionName": "Babblestorm",
    "institutionCode": "51660-127"
  }, {
    "id": 16,
    "institutionName": "Tazz",
    "institutionCode": "63323-647"
  }, {
    "id": 17,
    "institutionName": "Twinte",
    "institutionCode": "0363-9160"
  }, {
    "id": 18,
    "institutionName": "Babbleblab",
    "institutionCode": "55154-6825"
  }, {
    "id": 19,
    "institutionName": "Twimbo",
    "institutionCode": "49371-020"
  }, {
    "id": 20,
    "institutionName": "Thoughtstorm",
    "institutionCode": "0268-6178"
  }, {
    "id": 21,
    "institutionName": "Brainlounge",
    "institutionCode": "50114-6141"
  }, {
    "id": 22,
    "institutionName": "Ailane",
    "institutionCode": "52257-1230"
  }, {
    "id": 23,
    "institutionName": "Tazzy",
    "institutionCode": "61699-3182"
  }, {
    "id": 24,
    "institutionName": "Vinte",
    "institutionCode": "68472-098"
  }, {
    "id": 25,
    "institutionName": "Topicstorm",
    "institutionCode": "57520-0612"
  }, {
    "id": 26,
    "institutionName": "Oyoba",
    "institutionCode": "36800-461"
  }, {
    "id": 27,
    "institutionName": "Brainverse",
    "institutionCode": "60505-0102"
  }, {
    "id": 28,
    "institutionName": "Thoughtstorm",
    "institutionCode": "37000-088"
  }, {
    "id": 29,
    "institutionName": "Kayveo",
    "institutionCode": "0517-3120"
  }, {
    "id": 30,
    "institutionName": "Jayo",
    "institutionCode": "0517-0731"
  }, {
    "id": 31,
    "institutionName": "Youopia",
    "institutionCode": "20276-550"
  }, {
    "id": 32,
    "institutionName": "Gigazoom",
    "institutionCode": "50428-0030"
  }, {
    "id": 33,
    "institutionName": "Zoovu",
    "institutionCode": "63548-0056"
  }, {
    "id": 34,
    "institutionName": "Katz",
    "institutionCode": "10157-1042"
  }, {
    "id": 35,
    "institutionName": "Fivechat",
    "institutionCode": "0904-6238"
  }, {
    "id": 36,
    "institutionName": "Tagtune",
    "institutionCode": "56062-310"
  }, {
    "id": 37,
    "institutionName": "Thoughtstorm",
    "institutionCode": "42291-619"
  }, {
    "id": 38,
    "institutionName": "Skipstorm",
    "institutionCode": "49967-626"
  }, {
    "id": 39,
    "institutionName": "Aimbu",
    "institutionCode": "68308-145"
  }, {
    "id": 40,
    "institutionName": "Ntag",
    "institutionCode": "68001-233"
  }, {
    "id": 41,
    "institutionName": "Wordpedia",
    "institutionCode": "64764-175"
  }, {
    "id": 42,
    "institutionName": "Cogibox",
    "institutionCode": "30142-090"
  }, {
    "id": 43,
    "institutionName": "Fivespan",
    "institutionCode": "48951-1113"
  }, {
    "id": 44,
    "institutionName": "Minyx",
    "institutionCode": "48951-6053"
  }, {
    "id": 45,
    "institutionName": "Camimbo",
    "institutionCode": "0924-7110"
  }, {
    "id": 46,
    "institutionName": "Flipopia",
    "institutionCode": "51079-195"
  }, {
    "id": 47,
    "institutionName": "Centimia",
    "institutionCode": "55714-4536"
  }, {
    "id": 48,
    "institutionName": "Riffpedia",
    "institutionCode": "50383-779"
  }, {
    "id": 49,
    "institutionName": "Eamia",
    "institutionCode": "66184-460"
  }];

const InstitutionIndex = () => {
    return (
        <Page title="Institution Reference"  hasSearch searchLabel="Institution Code">
        
 
             
             <CustomCard 
           
             >
                
                 <InstitutionList list={data}/>
             </CustomCard>
             
               
             

        </Page>
       
    )
}

export default InstitutionIndex
