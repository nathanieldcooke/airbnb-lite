'use strict';

const { Spot } = require('../models')
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // may equal min, will be less than max
    function getRandNumBetween(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const allSpots = await Spot.findAll();
    const imageSeeds = [];
    // const mainImg = 'https://st.depositphotos.com/1507819/2694/v/600/depositphotos_26948143-stock-illustration-house-drawing.jpg'
    // const otherImg = 'https://images.template.net/wp-content/uploads/2016/03/15131449/Easy-and-Simple-Drawing-of-House-Free-PDF-Download.jpg'


    // allSpots.forEach(spot => {
    //   let i = getRandNumBetween(5, 10);
    //   while (i > 0) {
    //     let src = (i === 1) ? mainImg : otherImg;
    //     let title = faker.lorem.sentence(getRandNumBetween(4, 9));
    //     let main = (i === 1) ? true : false;
    //     let spotId = spot.id;
    //     imageSeeds.push({
    //       src, title, main, spotId
    //     })
    //     --i
    //   }
    // })

    const images = [
      [
        'https://a0.muscache.com/im/pictures/5f77d650-feea-4739-897f-a5ffc40c8753.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/6293ce8c-b940-4c4e-93f8-cbfc83191ecb.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/32ac8e7b-f357-4980-b0c2-4e73bfecd8e0.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/5379a7a9-a2f0-4f67-8dac-bda6ffea9a02.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/f58c374a-8ed2-44bd-8996-0ae23ae3f88c.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/0d7b7719-02d3-449d-9819-23908903caf2.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/9f50a038-5ce9-4d18-87e9-e479b6b734d0.jpg?im_w=720'
      ],
      [
        'https://a0.muscache.com/im/pictures/ed9b75c9-272c-41aa-bcbd-2a14b5421bf2.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/c44baacd-f0c4-4c95-ae10-fe121c0450fc.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/4844bc3c-c790-438b-bd82-705d987e0566.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/68e9b93a-bc31-45ba-8942-6622c07d4aea.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/4bca0a26-f84d-488c-ae17-e791cb96d4d8.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/7f6bd2ae-4886-428e-8ba2-eb773b2f0666.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/4e21fe10-884c-4a00-b33f-ca8301298478.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/7ab3eb63-1864-4918-b815-4cf07ae0211b.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/0ac9bfbd-6e93-4f57-9479-84452604063c.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/019e8145-6289-41e7-9afa-2f773aadf7ca.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/f56774fa-4b8e-447e-95e9-f7d5f375a8ee.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/97620e63-3f02-477d-a63c-3280bdccb7fb.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/39960068-a457-4db4-863c-fccedaed98e8.jpg?im_w=1440',
        'https://a0.muscache.com/im/pictures/de3d3fdc-7802-477f-bdee-de99c11a2865.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/5a890aab-b8f9-45d4-9424-086d4a8d665a.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/3c5447c0-2455-4b73-bc85-7be24e9db3ee.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/7a697c64-b04d-4cfb-91ef-48eca7645898.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/b6069ad8-f321-4ff1-897f-1e392b6ba331.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/a1371383-f64d-4f5c-827a-23c9f6c99e9e.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/18f9ba1e-ae14-4b61-867d-107d712f905d.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/00d6dc6b-ce80-4547-af15-2e0bf398ef82.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/141a4162-5850-49fd-9c40-c1e35e5658f8.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/833956d7-49b3-4ca1-90f0-852ac2c3ded2.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/73eb6226-e87a-47fe-b3d3-7d00bfb15ad9.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/dc41ad59-df5c-4d4c-b3ff-780f7bcca0cf.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/abe171ac-bc0b-4f0f-a70b-fbc4b30be3c7.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/42614329-1389-4c19-a0af-e77460f2d41c.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/28baa2a0-144e-4e6b-b74e-f080ba4e895b.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/2982d311-61f2-4810-8cdd-046f00d49d36.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/5c34c2e8-9ef7-44b8-aa10-201dd33bc8a4.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/ba2af2ae-5933-486a-ae98-59a8de5510a6.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/aa859e4a-7ccc-4c37-bd43-23f54c5a7517.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/544d7641-092a-4d34-bc37-9be6e7b7c47b.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/dee1e360-cfd5-4f40-bdd8-3e600c451bb4.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/6fba7a9b-653d-461c-b186-7aeecd519069.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/e533b8a2-2f12-4646-ae66-82171a1e2f01.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/17577888-3e59-4bc2-8eea-772055d44e38.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/a27c95b8-dc1f-4575-8291-c01f9b255668.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/d29b3510-ae27-4970-a4ee-7ebad752ba4e.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/bf387a68-6b73-49d1-a1f6-da5d6807c01b.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/99d4d962-600d-4162-8152-44166e4377aa.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/66279caf-b693-4ef4-b55a-6ded0d71131f.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/dabb0d56-e6b9-407a-9f82-a552accd0475.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/c9007d09-2ea1-4fd4-9191-92822f6213a3.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/b2daa8bc-b591-40c0-aaf5-6b9ce85341b7.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/34f26f6a-7e75-4d12-b394-a35af4b845c6.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/bb93f50b-4c1d-4db9-b891-520d63cd8b27.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/55e88c71-06f2-4ee8-b51e-6f7a2e8612fd.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/f353b93b-652a-4066-9f6c-ebc011513753.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/48ab44f0-3798-487f-a59f-cc914c9ba264.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/63bce60b-88a7-45d3-bc90-022714b39910.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/2abb6a65-b32d-40aa-8750-88af190dedfb.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/6a787219-aec7-406d-8ee8-2f5e02382bd9.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/c73484c3-21db-4e80-b522-374d9215f4b1.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/83c077f6-8f90-4879-bdd5-e943f0fc6943.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/9d11c266-46f4-416f-a30e-1d3711df59e8.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/04cc1213-5ba7-4f9d-b691-0114f58f87a5.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/cad622d7-c5ff-46c6-9a83-1f999b53e476.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/a8e5872e-b54f-4848-aaea-5d5c85309792.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/c268334b-042e-45a8-a0c7-432040a54faf.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/6725349d-139c-4405-8069-581975e14ad9.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/c3da34af-d9b6-49bc-a720-673f22cdb0fe.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/f1667560-03f7-44a6-bc0a-4849dbc225b7.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/4e965228-b121-48e4-8e91-76516e0951a2.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/eb1f7caa-a0fe-44a0-a07d-e0cb5e8b1857.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/b24370be-ecc4-4493-b7d5-6566cd79254f.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/63a0f535-b3da-48e5-ad46-3f511b14d8d9.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/1d21268a-94b4-45d7-a1c3-8d4c370eacfd.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/8ea61d1c-ac64-4f73-b27a-9bd96e427bf9.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/31427842-6b39-4940-881a-8b17c9e128c7.jpg?im_w=1200'
      ], 
      [
        'https://a0.muscache.com/im/pictures/b55d43fe-c814-4c01-b8ba-e43d50027b95.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/f98bd1c6-82e6-4f90-918d-244f52d641d9.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/df1c7272-cc4a-4792-8fed-309e8153a5f7.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/79278167-4ca6-4c63-a005-b2338866231a.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/a6e50e4f-0015-4461-85c9-74e1e05192e3.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/dc875b0e-6703-40d2-ba44-45fe38a10a2d.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/78294a0d-884d-45d8-9152-f23b9d7e6641.jpg?im_w=1200'
      ], 
      [
        'https://a0.muscache.com/im/pictures/5879346d-f0c3-4493-bff3-4e533482f197.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/0a5772de-5344-4e67-9859-d6468b30371d.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/6e2c96fa-2de2-4389-8e8e-ebe6145a6089.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/31b45b70-fb8c-4fb3-80f8-fccc5f26cdfa.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/56a6c4d9-fff8-4b31-b5c9-2723bed0d961.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/1b440a36-4065-4a4a-a2a1-3ae30d7f0436.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43627169/original/068831e6-fc05-42d1-94c8-f08bed314011.jpeg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/c823ab72-3086-477a-aeed-edece6ff2954.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/2bf119b7-3dab-4c23-b572-5db8632d3ae1.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/b92ba7eb-b277-42a0-90ca-5bdf30e1e54e.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/35877a77-c39b-44b6-a2fb-6f240e7baef6.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/cd45e4b4-9f5d-493e-b861-657e2868c403.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/8c15f2aa-b5cf-48c1-b55c-6f9810db2492.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/fb8750cd-51dc-48f0-989b-14d0ae3e79eb.jpg?im_w=1200'
      ], 
      [
        'https://a0.muscache.com/im/pictures/50966364/2c71c230_original.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/50963978/88a3e409_original.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/a0afa9a5-4b31-4b12-9966-6a86e8a3fed8.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/50963908/d3286454_original.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/81759591/5dbc390d_original.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/81743971/b6a609be_original.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/50966174/d4a09067_original.jpg?im_w=720'
      ], 
      [
        'https://a0.muscache.com/im/pictures/39501583-a263-49b2-a77d-30e6e8190a21.jpg?im_w=1200',
        'https://a0.muscache.com/im/pictures/27025c77-8b9e-42f5-b63f-5903e2b91aca.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/b17b2ac5-57e1-4cd3-88d9-fc633c4121a1.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/00c274f0-8c8a-4bcb-bf51-b86d195da435.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/85a22542-292b-45d3-af2b-1da92117cf76.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/2c8b2312-7fa2-497e-b0fe-f79057faaf13.jpg?im_w=720',
        'https://a0.muscache.com/im/pictures/377e7eac-9304-4a12-8e1a-d0c4e2795d67.jpg?im_w=720'
      ],
    ]
    
    allSpots.forEach((spot, i) => {
      let spotImgs = images[i]
      spotImgs.forEach((img, j) => {
        let src = img
        let title = faker.lorem.sentence(getRandNumBetween(4, 9));
        let main = (j === 0) ? true : false;
        let spotId = spot.id;
        imageSeeds.push({
          src, title, main, spotId
        }) 
      })
    })

    return queryInterface.bulkInsert('Images', imageSeeds, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
