var list =
{
  id: [
    {
      ชื่อ: 'หอพัก Golf view',
      รูปภาพ: '',
      ที่อยู่: '9/16 หมู่ 17 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12130',
      ติดต่อ: '098-445-1514,087-087-4343',
      Facebook: 'www.facebook.com/golfcity.golfview',
      เว็บไซต์หลัก: 'www.golfview-tu.com',
      โปรโมชั่นพิเศษ: 'พิเศษสุดๆเพียงจองห้อง วันนี้ถึง 31 ก.ค 59 ได้รับส่วนลด 2500',
      ประเภท: 'หอพัก',
      ลักษณะ: 'แบบพรีเมี่ยม ตึกใหม่ เป็นกุญแจระบบคีย์การ์ด ตกแต่งด้วยเฟอร์นิเจอร์สไตล์โมเดิร์น',
      วิธีการเช่า: 'รายเดือน',
      ราคา: '2,600-3,500 บาท',
      ค่าประกัน: '8,000 บาท',
      ค่าส่วนกลาง: 'ฟรี ไม่คิดค่าบริการ',
      ค่าน้ำ: 'ยูนิตละ 32 บาท เหมาจ่าย 5 ยูนิตแรก 150 บาท',
      ค่าไฟ: 'ยูนิตละ 6 บาท'
    },
    {
      ชื่อ: 'ซิตี้ พาร์ค ทียู City Park TU',
      รูปภาพ: '',
      ที่อยู่: '64 หมู่ที่ 8 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี',
      ติดต่อ: '0891148999,02-9018811,029018888 ต่อ 222,333,888,999',
      Facebook: 'www.facebook.com/golfcity.golfview',
      Instragram: '@cityparktu',
      เว็บไซต์หลัก: 'www.cityparktu.com',
      โปรโมชั่นพิเศษ: 'ทำสัญญา 10 เดือน Free Hi-speed internet 10 MB ตลอดสัญญา',
      สถานะ: 'มีห้องว่าง พร้อมให้บริการ',
      ประเภท: 'หอพัก',
      วิธีการเช่า: 'รายเดือน',
      ราคา: 'เริ่มต้นที่ 6,000 บาท/เดือน',
      ค่าประกัน: '1,500 บาท/ห้อง',
      ค่าส่วนกลาง: 'ไม่คิดค่าบริการ',
      ค่าน้ำ: 'ขั้นต่ำ 6 ยูนิต ยูนิตละ 35 บาท',
      ค่าไฟ: 'ยูนิตละ 6 บาท',
      สิ่งอำนวยความสะดวก: 'Free True Hi-speed Internet ที่จอดรถในร่มกว่า 300 คัน สระว่ายน้ำ ห้องออกกำลังกาย ห้องอ่านหนังสือ',
      เวลาในการเดินทาง: '5-10 นาทีจากมหาวิทยาลัยธรรมศาสตร์',
      รายละเอียดอื่นๆ: 'มีห้องตัวอย่างพร้อมชม กล้องวงจรปิดทุกมุมสำคัญภายในและภายนอกอาคาร'
    },
    {
      ชื่อ: 'หอพัก สกายวิว Sky View TU',
      รูปภาพ: '',
      ที่อยู่: '88/38 หมู่ที่ 8 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12130',
      ติดต่อ: '021914900 ต่อ 1000',
      Email: 'skyview.apartment@gmail.com',
      เว็บไซต์หลัก: 'http://www.skyview-apartment.com',
      สถานะ: 'ว่าง พร้อมให้บริการ',
      ประเภท: 'หอพัก',
      วิธีการเช่า: 'รายเดือน (สัญญา 1 ปี)',
      ราคา: '6,500 บาท True Internet 10 MB 599 บาท',
      ค่าประกัน: '20,000 บาท',
      ค่าส่วนกลาง: 'ฟรี',
      ค่าน้ำ: '28 บาท/ยูนิต',
      ค่าไฟ: '7 บาท/ยูนิต',
      สิ่งอำนวยความสะดวก: 'Fitness, Swimming Pool, 24 hours Security System',
      ใกล้กับ: 'มหาวิทยาลัยธรรมศาสตร์ ประตูเชียงราก2',
      รายละเอียดอื่นๆ: 'มีห้องตัวอย่างพร้อมเข้าชม'
    }
  ]
}

exports.findAll = function(){
    return list;
}

exports.findById = function(id){
    for(var i = 0;i < list.length;i++){
        if(list[i].id == id){
        return list[i];
        }
    }
};
