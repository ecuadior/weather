// const calculate = (a: number,b: number)=>{a+b};
// let balance = 500;
// let deposit = 500;
// let hackStrongsposit =500;
// let total = calculate(balance, deposit);

// //Overtyping
// let name: string = "potatp";
// let age:number = 40;
// let likesPizaa:boolean = true;
// //let weather:string = "suny";

// //Use type infrendce instaeda
// let weather = "sunny";
// function getWeather(weather:string):string{
//     return "the weather is "+weather;
// };
// getWeather(weather);

// //union types
// let stringOrnum: string | number;
// stringOrnum = "bar";
// stringOrnum = 5;
// stringOrnum = 3.4;
// const myFunc = (a:string|number, b:string|number)=>{
//     console.log(a);
//     console.log(b);
// }

// //arays
// let genericArray: [] = [];
// //genericArray.push(1);
// let numberArray: (number|string)[] = [];
// numberArray.push("potato");
// numberArray.push(1);
// let peoplAraay: {}[] = [];
// peoplAraay.push({name:"George", age:40});
// peoplAraay.push({heihgt: "6ft", weight:"fat"});

// // //object
// // let weatherDetail: {
// // 	weather: string,
// // 	zipcode: string,
// // 	temp: number
// // } = { weather: "sunny", zipcode: "00000", temp: 1 };
// // //weatherDetail.weather = 2; Error

// // let dynamicVar: any = "George"; // behave like normal js

// //creating custom type
// type WeatherDetailType = {
// weather: string;
// zipcode: string;
// temp?: number;
// };

// let weatherDetail: WeatherDetailType = {
// weather: "sunny",
// zipcode: "00000",
// temp: 30
// };
// let nyWeaather: WeatherDetailType={
//     weather : "Clear",
//     zipcode: "11797",
//     temp :45
// };

// const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;

// //sing interfcae
// interface WeatherProps {
// weather: string;
// zipcode: string;
// temp?: number;
// }
// let caifornaWEather: WeatherProps = {
//     weather: "sunny",
//     zipcode: "90210",
//     temp:72
// }
// const weatherComponent = (props: WeatherProps): string => props.weather;