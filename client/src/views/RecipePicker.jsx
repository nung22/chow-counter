import React, { useState } from 'react';
import RecipeForm from '../components/RecipePicker/RecipeForm';
import RecipeInfo from '../components/RecipePicker/RecipeInfo';

export default function RecipePicker () {
  const [tags, setTags] = useState([]);
  const [randomNum, setRandomNum] = useState(0);

  const tagsChanged = (newTags) => {
    const tempTags = [];
    Object.keys(newTags).forEach( key => {
      if(newTags[key].length > 0) {
        tempTags.push(newTags[key]);
      }
    })
    console.log(tempTags);
    setTags(tempTags);
    setRandomNum(Math.floor(Math.random() * 100));
  }
  return(
    <div className='flex flex-col gap-5 items-center sm:flex-row sm:items-start'>
      <RecipeForm setTags={tagsChanged}/>
      <RecipeInfo tags={tags} newSearch={randomNum}/>
    </div>
  )
}
