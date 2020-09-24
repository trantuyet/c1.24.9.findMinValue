//Khởi tạo mảng ban đầu
let arr1 = [3, 5, 1, 8, -3, 7, 8];

//Hàm tìm Giá trị nhỏ nhất trong mảng
function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
//Truyền đối số vào hàm và hiện kết quả
let min = minArray(arr1);
alert(min);
