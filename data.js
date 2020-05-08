import member from './sample.js';

class Member {
     static searchMember(keyword){
          let data = member.filter(user => {
               return user.name.toUpperCase().includes(keyword.toUpperCase());
          })
          
          return new Promise((resolved,reject) => {
               if(data.length) resolved(data);
               else {
                    reject(`${keyword} tidak ada..`);
               }
          })
          
     }
}

const app = new Member();

export default Member;