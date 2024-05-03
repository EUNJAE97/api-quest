const BASE_URL = 'https://koreanjson.com/'

// USER 전체 리스트
export  async function getPostList() {
    const url = `${BASE_URL}posts`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}

// USER 상세 조회
export  async function getPostDetail(id) {
    const url = `${BASE_URL}posts/${id}`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}