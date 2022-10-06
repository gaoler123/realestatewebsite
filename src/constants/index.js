const propertiesList = [
    {
        key: 1,
        img: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        rate: 1400,
        name: "Dominion Tower",
        type: "Villa",
        availability: new Date(2022, 10, 21),
        address: "Shastri Market, R K Puram",
        city: 'Delhi',
        details: ["2 beds", "2 bathrooms"]
    },
    {
      key: 2,
      img: "https://media.istockphoto.com/photos/modern-home-and-electric-car-picture-id1273896468?k=20&m=1273896468&s=612x612&w=0&h=B232kkJqnDHpp2gcXmfn9ofA0L_5Uu75jBK-Xl4IyBo=",
      rate: 2200,
      name: "Feral Dune Tower",
      type: "Villa",
      availability: new Date(2022, 1, 23),
      address: "100 Feet Rd",
      city: 'Delhi',
      details: ["3 beds", "3 bathrooms"]
    },
    {
      key: 3,
      img: "https://www.homestratosphere.com/wp-content/uploads/2019/02/decor-aid-hamptons-feb19-00001-min.png",
      rate: 2800,
      name: "Glory Lookout",
      type: "Bungalow",
      availability: new Date(2022, 9, 22),
      address: "Pokharan Rd, Upvan",
      city: 'Delhi',
      details: ["4 beds", "3 bathrooms"]
    },
    {
      key: 4,
      img: "https://media.architecturaldigest.com/photos/59f1e7eab56ff84bcaa873e7/master/w_4600,h_3067,c_limit/Oregon%20-%20Courtesy%20CIRE_Luxe%20Platinum%20Properties.jpg",
      rate: 4200,
      name: "Bear Ridge",
      type: "Bungalow",
      availability: new Date(2022, 3, 26),
      address: "991/2, Vijay Nagar",
      city: 'Delhi',
      details: ["5 beds", "4 bathrooms"]
    },
    {
      key: 5,
      img: "https://homezonline.in/wp-content/uploads/2022/07/A-nice-house-design-in-modern-style.jpg",
      rate: 2500,
      name: "Starlight Lookout",
      type: "Bungalow",
      availability: new Date(2022, 0, 1),
      address: "81, Gulalwadi, Girgaon",
      city: 'Mumbai',
      details: ["3 beds", "2 bathrooms"]
    },
    {
      key: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0AibtyA2aBXf30P55LmSTUifVnM1VYdSLw&usqp=CAU",
      rate: 1200,
      name: "Ebon Cavern Pillar",
      type: "Bungalow",
      availability: new Date(2022, 8, 11),
      address: "Laxman Public Campus",
      city: 'Mumbai',
      details: ["2 beds", "2 bathrooms"]
    },
    {
      key: 7,
      img: "https://2.bp.blogspot.com/-e7-OL5VgQF0/XEhgLtCCQPI/AAAAAAABRbw/bJV9yeF6Mk4FtWMOklRNTuS65mrevfmxwCLcBGAs/s1920/modern-house-flat-roof.jpg",
      rate: 3400,
      name: "Willow Bog Mast",
      type: "Villa",
      availability: new Date(2022, 2, 17),
      address: "307, Rajhans, NH-10",
      city: 'Mumbai',
      details: ["4 beds", "4 bathrooms"]
    },
    {
      key: 8,
      img: "http://www.caandesign.com/wp-content/uploads/2016/08/house-py-nice-big-vain-glazed-designed-modularq-arquitectura-11-696x464.jpg",
      rate: 4100,
      name: "Fury Mountain",
      type: "Villa",
      availability: new Date(2022, 9, 9),
      address: "Nr Laxmi Narayan Temple",
      city: 'Mumbai',
      details: ["4 beds", "4 bathrooms"]
    },
    {
      key: 9,
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rate: 2200,
      name: "Sanctity Tower",
      type: "Villa",
      availability: new Date(2022, 11, 10),
      address: "205, Ashram Rd",
      city: 'Ahemdabad',
      details: ["4 beds", "3 bathrooms"]
    },
    {
      key: 10,
      img: "https://i.pinimg.com/564x/28/60/22/28602227ac66d9f6b8bb359377b8a62a.jpg",
      rate: 4500,
      name: "Harmony Pillar",
      type: "Villa",
      availability: new Date(2022, 1, 10),
      address: "239-m, Sastri Rd",
      city: 'Ahemdabad',
      details: ["6 beds", "4 bathrooms"]
    },
    {
      key: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciP2qlr7l6IsFKNr7YL3C17jhiIA8AXRg9A&usqp=CAU",
      rate: 1100,
      name: "Trust Spire",
      type: "Bungalow",
      availability: new Date(2022, 9, 17),
      address: "Ansa Industrial Estate",
      city: 'Ahemdabad',
      details: ["3 beds", "3 bathrooms"]
    },
    {
      key: 12,
      img: "https://4.bp.blogspot.com/-IgghzKrDsbM/UzlmUAqpBmI/AAAAAAAAk5o/iiUMDZgKEIU/s1600/nice-indian-house.jpg",
      rate: 3300,
      name: "Justice Tower",
      type: "Bungalow",
      availability: new Date(2022, 2, 18),
      address: "Happy Home, Station Rd",
      city: 'Ahemdabad',
      details: ["3 beds", "3 bathrooms"]
    }
];

const cities = [
      {
        key: '1',
        text: 'Ahemdabad',
        value: 'Ahemdabad',
      },
      {
        key: '2',
        text: 'Delhi',
        value: 'Delhi',
      },
      {
        key: '3',
        text: 'Mumbai',
        value: 'Mumbai',
      }
];

const ranges = [
  {
    key: '1',
    text: '<1500',
    value: 500
  },
  {
    key: '2',
    text: '1500-2500',
    value: 1500,
  },
  {
    key: '3',
    text: '2500-3500',
    value: 2500
  },
  {
    key: '4',
    text: '>3500',
    value: 3500
  }
];

const types = [
      {
        key: '1',
        text: 'Bungalow',
        value: 'Bungalow',
      },
      {
        key: '2',
        text: 'Villa',
        value: 'Villa',
      }
]

export default propertiesList
export {cities, types, ranges};