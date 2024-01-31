import React from 'react'

function data() {
  const data = ["mango","banana","monkey","lion","Master","apple"]
    const listdatas = data.map ((item)=>(
  <li key={item}>data</li>
));
return(
 <>
  <ul>mongo</ul>
  <ul>banana</ul>
  <ul>monkey</ul>
  <ul>lion</ul>
  <ul>master</ul>
  <ul>apple</ul>
 </>
);

}
export default data;