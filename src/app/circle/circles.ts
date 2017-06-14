export class Circles {
circleName: string ;
circleId: string;
constructor(
	circleName: string,
circleId: string

) { this.circleName = circleName; this.circleId = circleId;}
clone() {
return new Circles(this.circleName, this.circleId);
} }