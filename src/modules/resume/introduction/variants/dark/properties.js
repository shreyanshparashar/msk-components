/* 🙋‍♂️ Explaination
*************************************************************************
This file declares all the properties that will be passed to the variant
when it is rendered in the editor.

'msk-property-types' | https://github.com/ManojSatishkumar/msk-property-types/blob/master/index.js
Declares different types of proprties supported.

'msk-themes' | https://github.com/ManojSatishkumar/msk-themes/blob/master/index.js
Declares different themes supported.
*************************************************************************
*/

/* ✅ RULES & BEST PRACTICES
*************************************************************************
Please follow these rules if you want your component to go LIVE.

1. Every object {} is a property.
2. Objects can contain arrays and nested objects.
3. A defaule 'value' should be given. If you are not sure, give the 'Lorem ipsum dolor' text.
4. The 'required' field indicates if the property is mandatory to be filled by the user to render the variant.
5. DO NOT use custom colors  / hex codes  for theme.
6. Use ONLY the property types supported in 'msk-property-types'
7. Make sure property keys are unique.
8. All fields are mandatory.
9. Each property {} can contain ONLY the below fields,
 - type
 - value
 - name
 - required
*************************************************************************
*/

/* 👨‍💻 Your code starts below.
*************************************************************************
Happy coding.
*************************************************************************/


import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Introduction',
    required: true
  },
  paragraphs: {
    name: 'Paragraph',
    type: propertyTypes.ARRAY,
    value: [
        {
          name: 'Paragraph text',
          type: propertyTypes.STRING_MULTI_LINE,
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          required: true
        },
    ],
    required: true
  }
};

export default properties;