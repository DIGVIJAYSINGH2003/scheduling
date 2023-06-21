import React from 'react'
import Menu from './menuapi'
import Menucard from './menucard'
import NavBar from './navbar'
import "./styles.css"


  const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",];// unique list of available categories


const Restaurant = () => {
  const [menuList, setMenuList] = React.useState(uniqueList);
    const [menuData , setMenuData] = React.useState(Menu); // react use state return arrays , which holds two things current state aur a function to update that state
    // here menudata is state varibale and setmenudata is updated function
    // this is state management / data manegment
    // write hooks at top not after return statement 
  


     const filterItem = (category) => {
       if (category === "All") {
         setMenuData(Menu);
         return;
       }//

       const updatedList = Menu.filter((curElem) => {
         return curElem.category === category;
       });

       setMenuData(updatedList);
     };

     // a filter item function 


  return (
    <>
     
      <NavBar filterItem ={filterItem} menuList={menuList} />
      <Menucard menuData={menuData}/>

    </>
  );
}
export default Restaurant