// Api to create a index in elasticsearch

// 1. Below is the requirements to create a index

// Method: PUT
// URL: hostname/index_name         // After the host name give the index name you want to create
// body:

// {
//  "settings": {
//      analysis: {
//             analyzer: {
//                  my-analayzer :{
//                         "type": "standard",
//                         "max_token_length": 10,    // by default 255
//                         "stopwords": "_english_"
//                  }
//             }
//       }
//     }
// }
