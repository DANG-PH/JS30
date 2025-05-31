{
    //bai1
    class sinhvien {
        constructor(msv,hoten,email,tuoi)
        {
            this.msv=msv;
            this.hoten=hoten;
            this.email=email;
            this.tuoi=tuoi;
        }
        hienthithongtin(){
            console.log(`ma sv: ${this.msv}`);
            console.log(`ho ten: ${this.hoten}`);
            console.log(`email: ${this.email}`);
            console.log(`tuoi: ${this.tuoi}`);
        }
    }
    let sinhvien1=new sinhvien("47","hai dang","d@gmail.com",20)
    let sinhvien2=new sinhvien("48","nguyen long","l@gmail.com",20)
    sinhvien1.hienthithongtin()
    sinhvien2.hienthithongtin()
}
{
    //bai2
    class nhanvien{
        constructor(hoten,chucvu,luongcoban,ngaylamviec)
        {
            this.hoten=hoten;
            this.chucvu=chucvu;
            this.luongcoban=luongcoban;
            this.ngaylamviec=ngaylamviec;
        }
        luongthatsu(){
            return this.luongcoban*this.ngaylamviec;
        }
        hienthiluong(){
            console.log(`${this.hoten}`);
            console.log(`${this.chucvu}`);
            console.log(`${this.luongcoban}`);
            console.log(`${this.ngaylamviec}`);
            console.log(`${this.luongthatsu()}`);
        }
    }
    let nhanvien1=new nhanvien("haidang","dev","33",30)
    nhanvien1.hienthiluong()
}
{
    class hanghoa{
        constructor(ma,ten,gia,soluong){
            this.ma=ma;
            this.ten=ten;
            this.gia=gia;
            this.soluong=soluong;
        }
    }
    let khohang=[]
    function themsanpham(hang){
        khohang.push(hang)
    }
    function giatrihangtonkho(){
        let tong=0;
        for (let i=0;i<khohang.length;i++){
            let sanpham=khohang[i];
            let giatri= sanpham.gia*sanpham.soluong;
            tong += giatri;
        }
        return tong
    }
    function sanphamdatnhat(){
        let spmax=khohang[0];
        for (let i=0;i<khohang.length;i++){
            if (khohang[i].gia>spmax.gia){
                spmax=khohang[i]
            }
        }
        return spmax;
    }
    themsanpham(new hanghoa("1","a",11,111));
    themsanpham(new hanghoa("2","b",22,222));
    themsanpham(new hanghoa("3","c",33,333));
    themsanpham(new hanghoa("2","d",44,444));
    console.log(`${giatrihangtonkho()}`)
    console.log(`${sanphamdatnhat().ten},${sanphamdatnhat().gia}`)

}