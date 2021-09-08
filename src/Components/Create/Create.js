import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
const Create = () => {
  const history=useHistory();
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const [name, setName] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState('')
  const [image, setimage] = useState(null)
  const date=new Date();
  const handleclick=()=>{
firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
ref.getDownloadURL().then((url)=>{
   console.log(url);
   firebase.firestore().collection('products').add({
     name:name,category:category,price:price,url:url,userId:user.uid,createdAt:date.toDateString()
   })
   history.push('/')
})
})
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>{
                setcategory(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            onChange={(e)=>{
              setprice(e.target.value)
            }}
            />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):""}></img>
      
            <br />
            <input type="file"  onChange={
              (e)=>{
setimage(e.target.files[0]);
              }
            } />
            <br />
            <button onClick={handleclick} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
