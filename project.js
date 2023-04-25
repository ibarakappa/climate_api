let testStudent = {
   student_id: 123,
   student_name: "A",
};
//
// 同postman 只是要加http:
fetch("http://localhost:8080/add_student", {
   method: POST,
   headers: {
      // 告訴後端這是JSON
      "Content-Tupe": "application/json",
   },
   // body是想傳送的資料
   body: {
      student_id: 123,
      student_name: "A",
   },
   //    先包資料再轉乘JSON
   //    body:JSON.stringify(testStudent);
})
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      console.log(data);
   })
   .catch((err) => console.log(err));
