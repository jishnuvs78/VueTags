// {/* <script src="https://unpkg.com/@johmun/vue-tags-input/dist/vue-tags-input.js"></script> */}
// import vueTagsInput from 'VueTagsInput';
// export default {
//     data() {
//       return {
//         tag: '',
//         tags: [],
//         autocompleteItems: [{
//           text: 'Spain',
//         }, {
//           text: 'France',
//         }, {
//           text: 'USA',
//         }, {
//           text: 'Germany',
//         }, {
//           text: 'China',
//         }],
//       };
//     },
//     computed: {
//       filteredItems() {
//         return this.autocompleteItems.filter(i => {
//           return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
//         });
//       },
//     },
//     // template: `<div>
//     //                 <vue-tags-input
//     //                   v-model="tag"
//     //                   :tags="tags"
//     //                   :autocomplete-items="filteredItems"
//     //                   @tags-changed="newTags => tags = newTags"
//     //                 />
//     //             </div>`
// };
import VueTagsInput from './vue-tags-input.js';
// const VueTagsInput=window.VueTagsInput;
export default {
  

  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
      autocompleteItems: [{
        text: 'Spain',
      }, {
        text: 'France',
      }, {
        text: 'USA',
      }, {
        text: 'Germany',
      }, {
        text: 'China',
      }],
    };
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  // template: `<div>
  //               <vue-tags-input
  //                 v-model="tag"
  //                 :tags="tags"
  //                 :autocomplete-items="filteredItems"
  //                 @tags-changed="newTags => tags = newTags"
  //               />
  //           </div>`
}