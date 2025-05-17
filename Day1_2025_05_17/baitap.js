{
    //bai1
    function kiemtrachanle(n){
        return n%2===0?"sochan":"sole"
    }
    console.log('bai1',kiemtrachanle(parseInt(prompt('bai1'))))
}
{
    //bai2
    function tinhgiaithua(n) {
        let k = n
        for (let i=1;i<k;i++){
            n*=i
        }
        return n
    }
    console.log('bai2',tinhgiaithua(parseInt(prompt('bai2'))))
}
{
    //bai3
    function demsochiahet(){
        let c=0
        for (let i=5;i<=100;i++){
            if(i%15===0){c+=1}
        }
        return c
    }
    console.log('bai3',demsochiahet())
}
{
    //bai4
    function tongsole(n){
        let i=1
        let sum=0
        while (2*i+1<n){
            sum+=2*i+1;
            i++
        }
        return sum
    }
    console.log('bai4',tongsole(parseInt(prompt('bai4'))))
}
{
    //bai5
    function bangcuuchuong(n){
        if (n<2||n>9){return null}
        for (let i=1;i<=10;i++){
            console.log(`${n} x ${i} = ${n*i}`)
        }
    }
    bangcuuchuong(parseInt(prompt('bai5')))
}
{
    //bai6
    function songuyento(n){
        if (n<2){console.log('bai 6 k phai snt');return}
        for (let i=2;i<=Math.sqrt(n);i++){
            if (n%i===0){console.log('bai 6 la snt')}
        }
    }
    songuyento(parseInt(prompt('bai6')))
}
{
    //bai7
    function vetamgiacvuong(n){
        for (let i=1;i<=n;i++){
            console.log('*'.repeat(i))
        }
    }
    vetamgiacvuong(parseInt(prompt('bai7')))
}
{
    //bai7 tam giac can
    function vetamgiaccan(n){
        //u1=1
        //u2=3 => un=2n-1
        //khoang trang 2 ben 2n-1-2i+1=2n-2i
        //khoang trang trai = n-i
        let spacee=0
        let hinhsao=0
        for (let i=1;i<=n;i++){
            spacee=console.log(' '.repeat(n-i))
            hinhsao=console.log('*'.repeat(2*i-1))
            console.log(spacee+hinhsao)
        }
    }
    vetamgiaccan(parseInt(prompt('bai7 dang 2')))
}
{
    //bai8
    function xeploai(diem){
        if (diem>=9){console.log('Xuat sac');return}
        if (diem>=8){console.log('Gioi');return}
        if (diem>=6.5){console.log('Kha');return}
        if (diem>=5){console.log('Trung binh');return}
        console.log('Yeu')
    }
    xeploai(parseInt(prompt('bai8')))
}
{
    //bai9
    function tongcs(n){
        let sum=0
        while (n>0){
            sum+=n%10;
            n=Math.floor(n/10)
        }
        return sum
    }
    console.log('bai9',tongcs(parseInt(prompt('bai9'))))
}
{
    //bai9 cach 2
    function tongcs(n){
        let s=n.toString()
        let sum=0
        for (let kytu of s){
            sum+=parseInt(kytu)
        }
        return sum
    }
    console.log('bai9',tongcs(parseInt(prompt('bai9'))))
}
{
    //bai9 cach 3
    function tongcs(n){
        let sum = n.toString().split('').reduce((summ,kytu)=>summ+parseInt(kytu),0)
        return sum
    }
    console.log('bai9',tongcs(parseInt(prompt('bai9'))))
}