/* 🙋‍♂️ Explaination
*************************************************************************
This is the rendering function of the variant. 
This variant will be rendered when the user chooses a component in the 
Components list inside the drag and drop editor.

The name of the file indicates what kind of variant it is.
*************************************************************************
*/

/* ✅ RULES & BEST PRACTICES
*************************************************************************
Please follow these rules if you want your component to go LIVE.
*************************************************************************
1. The file name should be unique since the variants are unique for a component.
2. Use the values of the properties that are passed and build the HTML.
3. Use ONLY Vanilla HTML to build the component.
4. Declare styles in the useStyles function and then use in the component. This is JSS syntax.
5. If a style is dynamic, you can declare it inline.
6. DO NOT use any 3rd party libraries like Material UI / Bootstrap to build the variant. 
This is because it will increase the bundle size.
7. The variant should be FULLY mobile responsive. 700px (desktop) 320px (mobile)
8. importing React is mandatory on the top of the file.
9. When using theme, use 'theme.value.color' for backgroundColor 
and 'theme.value.contrast' for text color.
10. When ever you want to loop an array with .map, extract it in a function inside the component.
11. DO NOT use CSS media queries.
12. Use only '.value' of the properties in this file.
*************************************************************************
*/

/* 👨‍💻 Your code starts below.
*************************************************************************
Happy coding
*************************************************************************/


import React from 'react'

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  sampleText: {
    fontSize: 15
  }
})

const BasicDark = (
  {
    theme,
    headlineText,
    paragraphs
  }
) => {
  const styles = useStyles()
  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      {
        paragraphs.value.map((paragraph, id) => {
          return <div key={id}>
            <br />
            <p style={styles.paragraph} >{paragraph.value}</p>
          </div>
        })
      }
    </div >
  );
};

export default BasicDark;