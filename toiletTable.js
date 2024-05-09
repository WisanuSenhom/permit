async function getProfile() {
    document.getElementById("loading").style.display = "block";
   const profile = await liff.getProfile()
   const xurl = `https://script.google.com/macros/s/AKfycbxOUI7OLZaX2b7tRyjp0Hl5GyVdLyU_4Rqk6YxsZz0F-U1eFXkvEmr0NuYjzPaWUsIy5A/exec?user=${profile.userId}&name=${profile.displayName}`;
   
   const records = await fetch(xurl);
   const data = await records.json();
    
    let tab = '';
    data.user.forEach(function (user) {
        
          tab += `<tr>
            <td>${user.date}</td>
            <td>${user.office}</td>
            <td>${user.room}</td>
            <td>${user.range}</td>
            <td>${user.score}</td>
            <td>${user.floor}</td>
            <td>${user.wall}</td>
            <td>${user.toilet}</td>
            <td>${user.water}</td>
            <td>${user.tap}</td>
            <td>${user.bin}</td>
            <td>${user.soap}</td>
            <td>${user.towel}</td>
            <td>${user.details}</td>
            <td>${user.name}</td>
            <td>${user.dupdate}</td>      
          
        </tr>`
    });
    console.log(tab)
    document.getElementById('tbody').innerHTML = tab;
    document.getElementById("loading").style.display = "none";
    $('#userTable').DataTable({
        "data": data.user,
        "columns": [
            { "data": 'date' },
            { "data": 'office' },
            { "data": 'room' },
            { "data": 'range' },
            { "data": 'score' },
            { "data": 'floor' },
            { "data": 'wall' },
            { "data": 'toilet' },
            { "data": 'water' },
            { "data": 'tap' },
            { "data": 'mirror' },
            { "data": 'bin' },
            { "data": 'soap' },
            { "data": 'towel' },
            { "data": 'details' },
            { "data": 'name' },
            { "data": 'dupdate' }
                ],
           "processing": true,
           "responsive":true,
        "order": [[ 0, 'desc' ], [ 3, 'asc' ]],
        //    "colReorder": true,
        //    "fixedColumns": true,
        //    "fixedHeader": true,
        //    "keys": true,
 "dom": 'lBfrtip', // เพิ่ม 'l' เพื่อแสดง "Show [n] entries"
                "lengthMenu": [ [10, 30, 50, 100, 150, -1], [10, 30, 50, 100, 150, "ทั้งหมด"] ], // รายการตัวเลือกในปุ่ม
                "buttons": [
                    'excel', 'print',
                ],
                "pageLength": 30
        
    });
}

async function main() {
    await liff.init({ liffId: "1654797991-3mwO60Od" })
      if (liff.isLoggedIn()) {
        getProfile() 
      } else {
        liff.login()
      }
  }
  main()
