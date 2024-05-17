import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatmessageService {
  postData(postMessage: { (message: any, targetOrigin: string, transfer?: Transferable[] | undefined): void; (message: any, options?: WindowPostMessageOptions | undefined): void; }) {
    throw new Error('Method not implemented.');
  }

  APIBaseUrl:string
  APIPostUrl ='ChatMessage/send_chatmessage'
  APIGetUrl='ChatMessage/get_allChatMessages'
  APIGetRoom='ChatRoom/get_chatRooms'


  constructor(private http: HttpClient) {

    this.APIBaseUrl=environment.API_BASE_URL

   }

   getMessages(room:string,email:string): Observable <any> {
   
    return this.http.get(this.APIBaseUrl + this.APIGetUrl +'/'+ room + '/'+ email, {
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjMmMwMjlmYmYxMzQ1NGE5ZjVhZjQzNThiYzljMmI3IiwiZW1haWwiOiJ5YXNoLnNoYWlsemExMjM0QGdtYWlsLmNvbSIsInJvbGUiOiJQUlRTLEluc3BlY3RvcixGYWN1bHR5LGFwcCIsInNpZCI6IjVjYTI3MzcwLTEwYzYtNGFjZi1iNTgzLWEzNmUyM2Q5ZGRmMyIsIm5iZiI6MTcxNTk0NjY5OCwiZXhwIjoxNzE1OTY0Njk4LCJpYXQiOjE3MTU5NDY2OTh9.tjYf2BkMLr2gVkAlYJSC9tr8sSOE6yrLeeJp8bZWU1Q'}
    });


}

postMessages(data:any): Observable <any>{
  return this.http.post(this.APIBaseUrl + this.APIPostUrl ,data,{
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjMmMwMjlmYmYxMzQ1NGE5ZjVhZjQzNThiYzljMmI3IiwiZW1haWwiOiJ5YXNoLnNoYWlsemExMjM0QGdtYWlsLmNvbSIsInJvbGUiOiJQUlRTLEluc3BlY3RvcixGYWN1bHR5LGFwcCIsInNpZCI6IjVjYTI3MzcwLTEwYzYtNGFjZi1iNTgzLWEzNmUyM2Q5ZGRmMyIsIm5iZiI6MTcxNTk0NjY5OCwiZXhwIjoxNzE1OTY0Njk4LCJpYXQiOjE3MTU5NDY2OTh9.tjYf2BkMLr2gVkAlYJSC9tr8sSOE6yrLeeJp8bZWU1Q'}
  }

  )};


  postmsg(data:any): Observable <any>{
    return this.http.post(this.APIBaseUrl + this.APIPostUrl ,data,{
      headers: {'Authorization': 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjMmMwMjlmYmYxMzQ1NGE5ZjVhZjQzNThiYzljMmI3IiwiZW1haWwiOiJ5YXNoLnNoYWlsemExMjM0QGdtYWlsLmNvbSIsInJvbGUiOiJQUlRTLEluc3BlY3RvcixGYWN1bHR5LGFwcCIsInNpZCI6IjVjYTI3MzcwLTEwYzYtNGFjZi1iNTgzLWEzNmUyM2Q5ZGRmMyIsIm5iZiI6MTcxNTk0NjY5OCwiZXhwIjoxNzE1OTY0Njk4LCJpYXQiOjE3MTU5NDY2OTh9.tjYf2BkMLr2gVkAlYJSC9tr8sSOE6yrLeeJp8bZWU1Q'}
    }
  
    )};
  
   
   getroom(email:string): Observable <any> {
     return this.http.get(this.APIBaseUrl + this.APIGetRoom +'/'+email,{
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjJjMmMwMjlmYmYxMzQ1NGE5ZjVhZjQzNThiYzljMmI3IiwiZW1haWwiOiJ5YXNoLnNoYWlsemExMjM0QGdtYWlsLmNvbSIsInJvbGUiOiJQUlRTLEluc3BlY3RvcixGYWN1bHR5LGFwcCIsInNpZCI6IjVjYTI3MzcwLTEwYzYtNGFjZi1iNTgzLWEzNmUyM2Q5ZGRmMyIsIm5iZiI6MTcxNTk0NjY5OCwiZXhwIjoxNzE1OTY0Njk4LCJpYXQiOjE3MTU5NDY2OTh9.tjYf2BkMLr2gVkAlYJSC9tr8sSOE6yrLeeJp8bZWU1Q'}
     }
  )};
}
  



