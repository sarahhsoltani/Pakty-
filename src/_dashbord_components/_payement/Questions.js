export const questions = [
    {
      section: 1,
      items: [
        {
          type:'img',
          srcc: "require('../../../assets/img/shape.png')"
        }
        ,
        {
          label: 'Select a file or drag and drop here',
          type: 'para',
          value: 'username'
        },
        {
          labell: 'JPG, PNG or PDF, file size no more than 10MB',
          type: 'paraP',
          value: 'password'
        },
        {
          label:'Select File',
          type:'file',
          value: 'Select File'
        }
       
      ]
    },
    {
      section: 2,
      items: [
        {
       
          type: 'input_1',
          value: 'street'
        },
        {
          label: ['🇳🇱&emsp  ;','🇩🇪&emsp;'],
          type: 'select',
          value: '🇳🇱&emsp;',
          options: [{'label':''}]
        },
        ,
        {
       
          type: 'textArea',
          value: 'city'
        }
      ]
    },
    {
      section: 3,
      items: [
        {
          label: 'If you are ready to submit please press `Submit`',
          type: 'information'
        }
      ]
    }
  ]
  