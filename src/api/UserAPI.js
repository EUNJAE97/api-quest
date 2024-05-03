const BASE_URL = 'https://koreanjson.com/'

// USER 전체 리스트
export  async function getUserList() {
    const url = `${BASE_URL}users`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}

// USER 상세 조회
export  async function getUserDetail(id) {
    const url = `${BASE_URL}users/${id}`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}