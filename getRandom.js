//random함수는 랜덤한 수를 뽑아내는 것이고
//.floor은 내림이란 의미로 소숫점들을 전부 없애버린다
export default function random() {
    return Math.floor(Math.random() * 10)
}