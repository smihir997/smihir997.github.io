var names=new Array();
names[0]="Mihir";
names[1]="Jay";
names[2]="Chikani";
names[3]="Patni";
names[4]="Darshna";
names[5]="Janvi";
names[6]="Sanjna";
names[7]="Shivani";
names[8]="Ayush";
names[9]="Archie";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}