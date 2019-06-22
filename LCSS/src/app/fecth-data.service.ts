import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FecthDataService {
  constructor(private http: HttpClient) { }

  async getAllGames() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const data = await this.http.get('./assets/apiTest.json', { headers }).toPromise();
    return data;
  }

  async getGame(id) {
    // đây là id của game. ông chỉ cần lấy id nay ra bỏ vô url bên dưới là ok.
    // Format json file ông xem theo 2 file json trong folder asset la ok nhe.
    // với lại description trong từng game dc thì ông cho dài hơn description trong trang chính nhe.
    // bấm vô read more hoặc play game là ông se navigate vô từng game.
    // nhớ chỉnh Url cho cả 2 services get all với get game
    console.log('id: ' + id);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const data = await this.http.get('./assets/apiTest.1.json', { headers }).toPromise();
    return data;
  }

  async postComment(gameId: number, comment: string) {
    let headers: HttpHeaders = new HttpHeaders();
    // Nếu cần header thì ông chỉnh ở đây
    // headers = headers.append('Access-Control-Allow-Origin', '*');

    console.log('game id: ' + gameId);
    console.log('comment: ' + comment);

    // ông muốn post cái gì thì ghi vào đây
    const postObject = {

    };

    const data = await this.http.post('./assets/apiTest.1.json', postObject);
    return data;
  }

}
