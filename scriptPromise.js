import Member from './data.js';

const view = () => {
     let searchElement = document.querySelector('#search');
     let buttonSearch = document.querySelector('#searchButton');
     let listData = document.querySelector('.list')

     const dataList = async () => {
          try{
               let viewsData = await Member.searchMember(searchElement.value);
               view(viewsData);
          }catch(err){
               failedData(err);
          }
     }

     const view = dataMember => {
          listData.innerHTML = ' ';
          dataMember.forEach(dataObj => {
               let memberContainer = document.createElement('div');

               memberContainer.setAttribute('class', 'member')

               memberContainer.innerHTML = 
               `<img src=${dataObj.img}> 
                <div class='dataMember'> 
                    <p>Nama : ${dataObj.name}</p>
                    <p>Umur  : ${dataObj.age}</p>
                    <p>No Telp : ${dataObj.phoneNumbers[0].number}</p>
                    <p>Alamat : ${dataObj.address.city} ${dataObj.address.state}
                    ${dataObj.address.streetAddress} ${dataObj.address.postalCode}</p>
               `;
               
               listData.appendChild(memberContainer);
          });
     }

     const failedData = noData => {
          listData.innerHTML = `<h2> ${noData} </h2>`; 
     }

     window.addEventListener('load', dataList);
     searchElement.addEventListener('input', dataList);

}

document.addEventListener('DOMContentLoaded', view);