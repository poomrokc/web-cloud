var list =
{
  'id': [
    {
      'ชื่อ': 'หอพัก Golf view',
      'รูปภาพ': '',
      'ที่อยู่': '9/16 หมู่ 17 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12130',
      'ติดต่อ': '098-445-1514,087-087-4343',
      'Facebook': 'www.facebook.com/golfcity.golfview',
      'เว็บไซต์หลัก': 'www.golfview-tu.com',
      'โปรโมชั่นพิเศษ': 'พิเศษสุดๆเพียงจองห้อง วันนี้ถึง 31 ก.ค 59 ได้รับส่วนลด 2500',
      'ประเภท': 'หอพัก',
      'ลักษณะ': 'แบบพรีเมี่ยม ตึกใหม่ เป็นกุญแจระบบคีย์การ์ด ตกแต่งด้วยเฟอร์นิเจอร์สไตล์โมเดิร์น',
      'วิธีการเช่า': 'รายเดือน',
      'ราคา': '2,600-3,500 บาท',
      'ค่าประกัน': '8,000 บาท',
      'ค่าส่วนกลาง': 'ฟรี ไม่คิดค่าบริการ',
      'ค่าน้ำ': 'ยูนิตละ 32 บาท เหมาจ่าย 5 ยูนิตแรก 150 บาท',
      'ค่าไฟ': 'ยูนิตละ 6 บาท'
    },
    {
      'ชื่อ': 'หอพัก Golf view',
      'รูปภาพ': '',
      'ที่อยู่': '9/16 หมู่ 17 ถ.พหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12130',
      'ติดต่อ': '098-445-1514,087-087-4343',
      'Facebook': 'www.facebook.com/golfcity.golfview',
      'เว็บไซต์หลัก': 'www.golfview-tu.com',
      'โปรโมชั่นพิเศษ': 'พิเศษสุดๆเพียงจองห้อง วันนี้ถึง 31 ก.ค 59 ได้รับส่วนลด 2500',
      'ประเภท': 'หอพัก',
      'ลักษณะ': 'แบบพรีเมี่ยม ตึกใหม่ เป็นกุญแจระบบคีย์การ์ด ตกแต่งด้วยเฟอร์นิเจอร์สไตล์โมเดิร์น',
      'วิธีการเช่า': 'รายเดือน',
      'ราคา': '2,600-3,500 บาท',
      'ค่าประกัน': '8,000 บาท',
      'ค่าส่วนกลาง': 'ฟรี ไม่คิดค่าบริการ',
      'ค่าน้ำ': 'ยูนิตละ 32 บาท เหมาจ่าย 5 ยูนิตแรก 150 บาท',
      'ค่าไฟ': 'ยูนิตละ 6 บาท'
    }
  ]
}

exports.findAll = function () {
  return list
}

exports.findById = function (id) {
  for (var i = 0;i < list.length;i++) {
    if (list[i].id == id) {
      return list[i]
    }
  }
}
