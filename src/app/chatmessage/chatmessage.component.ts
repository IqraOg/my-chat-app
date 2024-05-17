import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatmessageService } from '../chatmessage.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.css']
})
export class ChatmessageComponent {

  who_mi: string = 'Administrator'
  SignupForm: FormGroup;
  messages: any[] = [];
  chat: any;
  chatroom: any[] = [];

  @ViewChild('chatContainer') chatContainer!: ElementRef;
room: any;
  constructor(private chatmessageService: ChatmessageService, public fb: FormBuilder,) {
    this.SignupForm = new FormGroup({
      'msg': new FormControl(null),
      'msg1': new FormControl(null)
    });
  }

  ngOnInit(): void {
    
    this.getroom();
  }

  fetchMessages(room:any,email:any) {
   
    this.chatmessageService.getMessages(room, email).subscribe({
      next: res => {


        let totalMessages = res.length;
        let startIndex = Math.max(0, totalMessages - 20);
        this.messages = res.slice(startIndex);


      },
      error: err => {
        console.error("Error fetching messages:", err);
        // Handle the error as needed, e.g., show an error message to the user
      }
    });
  }


  onSubmit() {
    const postMessage = {
      content: this.SignupForm.controls['msg'].value,
      user: "Administrator",
      room: "7c617ce66f2c4e45a1c12d4151e7ecd2",
      email: "Administrator",
    }

    const dddd = {
      content: postMessage.content,
      creation: new Date(),
      sender: postMessage.user,
      sender_email: postMessage.email
    }
    this.messages.push(dddd)
    this.SignupForm.reset()
    this.chatmessageService.postMessages(postMessage).subscribe();
  }


  // Onsubmit() {
  //   const postData = {
  //     content: this.SignupForm.controls['msg1'].value,
  //     user: "2c2c029fbf13454a9f5af4358bc9c2b7",
  //     room: "7c617ce66f2c4e45a1c12d4151e7ecd2",
  //     email: "yash.shailza1234@gmail.com",
  //   }
  //   this.chatmessageService.postmsg(postData).subscribe({

  //   });
  // }

  getroom() {
    let email = "Administrator"

    this.chatmessageService.getroom(email).subscribe(res => {
      debugger

      this.chatroom = res

    });

  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
 
 
}
