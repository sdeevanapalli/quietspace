const timetable = 
[['', 'M', 'T', 'W', 'Th', 'F'], 
['1', 'F106\nF101\nG103\nI222\nG208\nJ107\nJ219\nJ218\n\n', 'F101\nI221\nI211\nJ219\nI212', 'F208\nF106\nI122\nF101\nI221\nJ217\nF108\nI222\nJ107\nJ219\nJ218\nI112\n', 'F101\nI221\nI213\nI211\nI114\nJ214\nJ219\nJ206\nJ218\n\nI212', 'F208\nF106\nI122\nF101\nF203\nF204\nI222\nI114\nJ219\nJ218\n\nI212'],
['2', 'F202\nI122\nF101\nI221\nI113\nG204\nF204\nJ115\nJ214\nJ219\nJ206\nJ121\nJ218\nI112\nI210\n\nI212', 'F202\nG102\nG105\nI122\nG206\nF109\nF101\nJ217\nI113\nJ220\nG201\nF201\nF204\nF205\nI213\nI211\nG202\nI222\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\n\nI212','F202\nI122\nI221\nI113\nG204\nF204\nJ115\nJ214\nJ219\nJ206\nJ121\nJ218\nI112\nI210\n\nI212', 'F202\nG102\nG105\nI122\nG206\nF109\nF101\nJ217\nI113\nJ220\nG201\nF201\nF204\nF205\nI213\nI211\nG202\nI222\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\n\nI212', 'F202\nI122\nG206\nI221\nI113\nG204\nF204\nG208\nJ115\nJ214\nJ219\nJ206\nJ121\nJ218\nI112\nI210\n\nI212'],
['3', 'G102\nJ217\nI113\nJ220\nI222\nJ115\nJ214\nJ119\nJ219\nJ206\nI210\n\nI212', 'F202\nG206\nJ120\nF101\nI221\nJ220\nG204\nF203\nF201\nF205\nG103\nG104\nI213\nI211\nG202\nI222\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG207\n\nI212', 'G102\nF101\nJ217\nI113\nJ220\nI222\nJ115\nJ214\nJ119\nJ219\nJ206\nI210\n\nI212', 'F202\nG206\nJ120\nF101\nI221\nJ220\nG204\nF203\nF201\nF205\nG103\nG104\nI213\nI211\nG202\nI222\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG207\n\nI212', 'G102\nG206\nF101\nJ217\nI113\nJ220\nI222\nJ115\nJ214\nJ119\nJ219\nJ206\nI210\n\nI212'], 
['4', 'I122\nG206\nJ120\nF107\nI221\nJ217\nI113\nG204\nI213\nI222\nJ219\nJ121\nG108\nI112\nI210\n\nI212', 'G107\nF103\nG102\nG105\nG106\nF106\nJ120\nF101\nI221\nJ217\nI113\nJ220\nG204\nF201\nF204\nG104\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n', 'I122\nG206\nJ120\nF107\nI221\nJ217\nI113\nG204\nI222\nJ219\nJ121\nG108\nI112\nI210\n\nI212', 'G107\nF103\nG102\nG105\nG106\nF208\nF106\nJ120\nF101\nI221\nJ217\nI113\nJ220\nG204\nF201\nF204\nG104\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n', 'G107\nG206\nJ120\nF101\nF107\nI221\nJ217\nI113\nG204\nI213\nG202\nI222\nJ219\nJ121\nG108\nI112\nI210\n\nI212'],
['5', 'G107\nF202\nG101\nG105\nG106\nI122\nG206\nJ120\nF101\nF207\nI221\nJ217\nI113\nJ220\nG201\nF205\nG103\nI213\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG207\n\nI212', 'G107\nF103\nG101\nG102\nG105\nG106\nF106\nF102\nI122\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF204\nF108\nF205\nG103\nG104\nF105\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG205\n\nI212', 'G107\nF202\nG105\nG106\nI122\nG206\nJ120\nF101\nF207\nI221\nJ217\nI113\nJ220\nG201\nF205\nG103\nI213\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG207\n\nI212', 'G107\nF103\nG101\nG102\nG105\nG106\nF208\nF106\nF102\nI122\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF204\nF108\nF205\nG103\nG104\nF105\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG205\n\nI212', 'G107\nG101\nG105\nG106\nI122\nG206\nJ120\nF101\nF207\nI221\nJ217\nI113\nJ220\nG201\nF205\nG103\nI213\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG207\n\nI212\n'], 
['6', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF106\nF102\nI122\nG206\nF109\nJ120\nF101\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nI213\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI210\nG203\nG205\n\nI212', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF208\nF106\nF102\nI122\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nI213\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG205\nG207\n\nI212\n', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF106\nF102\nI122\nG206\nF109\nJ120\nF101\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nI213\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI210\nG203\nG205\nG207\n\nI212', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF208\nF106\nF102\nI122\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nI213\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG205\nG207\n\nI212\n', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF106\nF102\nI122\nG206\nF109\nJ120\nF101\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nG103\nG104\nF105\nI213\nI211\nG202\nI222\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nI210\nG203\nG205\nG207\n\nI212'], 
['7', 'F202\nF103\nG101\nG105\nF208\nF102\nG206\nF109\nF104\nF101\nF207\nF107\nJ220\nG201\nF204\nF108\nF205\nG103\nG104\nF105\nI213\nG202\nI222\nJ115\nJ107\nJ119\nJ219\nJ206\nJ121\nI210\nG203\n\nI212', 'G107\nF103\nG101\nG105\nG106\nF208\nF106\nF102\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nJ220\nG201\nG204\nF108\nF205\nG103\nF105\nI213\nG202\nI222\nJ107\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nG203\nG205\nG207\nI12', 'F103\nG101\nG105\nG106\nF208\nF106\nI122\nG206\nF104\nF101\nF207\nF107\nI221\nJ220\nG201\nG204\nF201\nF204\nF108\nF205\nG103\nG104\nI213\nI211\nI222\nG208\nJ115\nJ107\nI114\nJ119\nJ219\nJ206\nJ121\nI111\nI210\nG203\nG207\n\nI212', 'G107\nF202\nF103\nG101\nG105\nG106\nF208\nF106\nF102\nG206\nF109\nJ120\nF104\nF101\nF207\nF107\nI221\nJ217\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nF105\nI213\nG202\nI222\nJ115\nJ107\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nI112\nI111\nG203\nG205\nG207\n\n', 'G107\nF103\nG101\nF208\nF106\nI122\nG206\nF104\nF101\nF207\nI221\nG201\nG204\nF205\nF105\nI213\nI211\nG202\nG208\nJ107\nI114\nJ119\nJ219\nJ206\nJ121\nI112\nI111\nG203\nG205\nG207\n\nI212'],
['8', 'G107\nG101\nG106\nF102\nG206\nF109\nF101\nF207\nJ220\nG201\nF204\nF205\nI213\nI211\nG202\nI222\nJ115\nJ214\nJ206\nJ218\nG108\nI112\nI111\nI210\nG207\n\nI212', 'F202\nF103\nG101\nG102\nG105\nG106\nF208\nF106\nF102\nJ120\nF104\nF101\nF107\nJ217\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nG202\nG208\nJ115\nJ107\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG203\nG205\nG207\n', 'G107\nG101\nG106\nF102\nG206\nF109\nF101\nF207\nJ220\nG201\nF204\nF205\nI213\nI211\nG202\nI222\nJ115\nJ214\nJ206\nJ218\nG108\nI112\nI111\nI210\nG207\n\nI212\n', 'G107\nF202\nF103\nG101\nG102\nG105\nG106\nF208\nF106\nF102\nJ120\nF104\nF101\nF107\nJ217\nJ220\nG201\nG204\nF203\nF201\nF204\nF108\nF205\nG103\nG104\nF105\nG202\nG208\nJ115\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nG108\nG203\nG205\nG207\n', 'G107\nG101\nF102\nG206\nF109\nF101\nF207\nJ220\nG201\nF204\nF205\nI213\nI211\nG202\nI222\nJ115\nJ214\nJ206\nJ218\nG108\nI112\nI111\nI210\nG207\n\nI212'],
['9', 'F102\nG107\nF202\nI122\nG206\nF101\nI221\nI113\nJ220\nG201\nF204\nI213\nI211\nI222\nI114\nJ214\nJ119\nJ219\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n\nI212', 'F103\nF106\nI122\nJ120\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nF203\nF201\nF204\nI213\nI211\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nI112\nI111\nI210\n\nI212', 'F102\nG107\nF202\nG206\nF101\nI221\nI113\nJ220\nG201\nG204\nF201\nF204\nF108\nI213\nI211\nI222\nI114\nJ214\nJ119\nJ219\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n\nI212\n', 'G107\nF103\nG102\nG105\nG106\nI122\nJ120\nF101\nF207\nF107\nI221\nJ217\nI113\nJ220\nG201\nG204\nF203\nF201\nF204\nG103\nG104\nI213\nI211\nG202\nI222\nF106\nG208\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n\nI212', 'F106\nG107\nF202\nG106\nF208\nI122\nG206\nF101\nF107\nI221\nI113\nJ220\nG201\nF201\nF204\nF108\nG103\nI213\nI211\nI222\nG208\nI114\nJ214\nJ119\nJ219\nJ121\nJ218\nI112\nI111\nI210\nG205\nG207\n\nI212'],
['10', 'F103\nF106\nF102\nI122\nJ120\nF101\nF207\nI221\nJ220\nG103\nI213\nI222\nG208\nJ115\nJ107\nI114\nJ119\nJ219\nJ206\nJ218\n\nI212', 'F103\nF102\nI122\nF104\nF101\nI221\nF105\nI211\nJ107\nJ219\nI212\n', 'F103\nG102\nF208\nF106\nI122\nF101\nI221\nJ217\nI113\nJ220\nF108\nI213\nI211\nI222\nJ107\nI114\nJ214\nJ219\nJ206\nJ218\nI112\nI111\n\n', 'F103\nF208\nF102\nI122\nF104\nF101\nI221\nJ217\nF105\nI213\nI211\nJ107\nI114\nJ214\nJ119\nJ219\nJ206\nJ121\nJ218\n\nI212', 'F202\nF103\nF208\nF106\nF102\nI122\nF109\nF104\nF101\nI113\nJ220\nF203\nF204\nF105\nI222\nI114\nJ219\nJ121\nJ218\nI112\nI111\n\nI212\n']]
;

function checkAvailability() {
    const day = document.getElementById('daySelect').value;
    const selectedHours = Array.from(document.querySelectorAll('.hour-btn.selected')).map(button => button.dataset.hour); // Get selected hours from buttons

    if (selectedHours.length === 0) {
        alert("Please select at least one hour.");
        return;
    }

    const dayIndex = ['M', 'T', 'W', 'Th', 'F'].indexOf(day) + 1; 
    let availableRooms = null; 

    
    selectedHours.forEach(hour => {
        const hourIndex = parseInt(hour); 

        
        if (timetable[hourIndex] && timetable[hourIndex][dayIndex]) {
            const rooms = timetable[hourIndex][dayIndex].split('\n');

            if (availableRooms === null) {
                
                availableRooms = new Set(rooms);
            } else {
                
                availableRooms = new Set(rooms.filter(room => availableRooms.has(room)));
            }
        }
    });

    const resultElement = document.getElementById('result');
    if (availableRooms && availableRooms.size > 0) {
        
        const sortedRooms = Array.from(availableRooms).sort((a, b) => {
            const blockA = a[0]; 
            const blockB = b[0]; 
            
            if (blockA < blockB) return -1;
            if (blockA > blockB) return 1;
            
            const numA = parseInt(a.slice(1));
            const numB = parseInt(b.slice(1));
            return numA - numB;
        });
        
        resultElement.innerHTML = `Classrooms available: <br><br> ${sortedRooms.join('<br>')}`;
    } else {
        resultElement.innerHTML = `No rooms available.`;
    }
}


document.querySelectorAll('.hour-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('selected');
    });
});


function clearSelections() {
    
    document.querySelectorAll('.hour-btn').forEach(button => {
        button.classList.remove('selected');
    });

    
    document.getElementById('result').innerHTML = '';
}

