let primaryColors = ["#F1F7FF", "#EAF0FF", "#DFE5FD", "#CED4EC", "#AAB0C6", "#8A90A5", "#62687C", "#4F5568", "#313749", "#101727"];
let secondaryColors = ["#FAEBED", "#F4CDD0", "#DE9B98", "#CE7772", "#D55C51", "#D94E38", "#CB4536", "#BA3D30", "#AD362A", "#9F2D1F"];
let successColors = ["#E6F6E7", "#C4E9C4", "#9DDB9F", "#72CE77", "#4EC358", "#2CB73B", "#20A832", "#0E9527", "#00841C", "#006507"];
let dangerColors = ["#FDECF0", "#FCD0D6", "#EB9FA2", "#E07B7F", "#EB5F60", "#F05149", "#E24948", "#CF4041", "#C23A3A", "#B23230"];
let warningColors = ["#FFFDEC", "#FFF8D1", "#FFF4B4", "#FFEF99", "#FDEA86", "#FBE477", "#FCDA77", "#F4C46E", "#ECAF66", "#DE8E59"];
let infoColors = ["#E4F6F7", "#BDE9EB", "#98DBDE", "#76CCD2", "#60C2CA", "#54B8C3", "#4FA8B1", "#489399", "#417F82", "#335C5B"];
let greyScaleColors = ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"];

let primary = document.querySelectorAll(".primary .colorHue")
let secondary = document.querySelectorAll(".secondary .colorHue")
let success =  document.querySelectorAll(".success .colorHue")
let danger =  document.querySelectorAll(".danger .colorHue")
let warning =  document.querySelectorAll(".warning .colorHue")
let infoElem =  document.querySelectorAll(".info .colorHue")
let greyScale = document.querySelectorAll(".greyScale .colorHue")

let hexPrimary = document.querySelectorAll(".primary .hex")
let hexSecondary = document.querySelectorAll(".secondary .hex")
let hexSuccess = document.querySelectorAll(".success .hex")
let hexDanger = document.querySelectorAll(".danger .hex")
let hexWarning = document.querySelectorAll(".warning .hex")
let hexInfo =  document.querySelectorAll(".info .hex")
let hexGreyScale = document.querySelectorAll(".greyScale .hex")

console.log(hexGreyScale)

let i = primaryColors.length -1;
let j = 0;

primary.forEach(color =>{
    color.style.backgroundColor = primaryColors[i]
    hexPrimary[j].innerHTML = primaryColors[i]

    secondary[j].style.backgroundColor = secondaryColors[i]
    hexSecondary[j].innerHTML = secondaryColors[i]

    success[j].style.backgroundColor = successColors[i]
    hexSuccess[j].innerHTML = successColors[i]

    danger[j].style.backgroundColor = dangerColors[i]
    hexDanger[j].innerHTML = dangerColors[i]

    warning[j].style.backgroundColor = warningColors[i]
    hexWarning[j].innerHTML = warningColors[i]

    infoElem[j].style.backgroundColor = infoColors[i]
    hexInfo[j].innerHTML = infoColors[i]
    i--
    j++
})

let h = greyScaleColors.length-1;
j = 0
greyScale.forEach(color=>{
    
    color.style.backgroundColor = greyScaleColors[h]
    console.log(greyScaleColors[h])
    console.log(color)
    hexGreyScale[j].innerHTML = greyScaleColors[h]
    h--
    j++
})

//ESPACIADOS

let spacing = ["120px", "88px", "56px", "48px", "32px", "24px", "20px", "16px", "12px", "8px", "4px", "2px"];
let container = document.querySelectorAll(".espaciados");
let textSpace= document.createElement('div')
textSpace.setAttribute("class", "espaciadoTexto")
let divSpace= document.createElement('div')
divSpace.setAttribute("class", "espaciadoDiv")
container[0].append(textSpace)   
container[0].append(divSpace) 
spacing.forEach(space =>{
    let spacingText = document.createElement("span")
    spacingText.setAttribute("class", "lineText");
    let spacingDiv = document.createElement("div")
    spacingDiv.setAttribute("class", "lineSpacing");
    spacingDiv.style.width = space;
    spacingText.innerHTML = space;
    textSpace.append(spacingText);
    divSpace.append(spacingDiv);
})