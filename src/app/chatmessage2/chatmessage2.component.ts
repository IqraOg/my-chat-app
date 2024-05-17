import { Component } from '@angular/core';
import { ChatmessageService } from '../chatmessage.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-chatmessage2',
  templateUrl: './chatmessage2.component.html',
  styleUrls: ['./chatmessage2.component.css']
})
export class Chatmessage2Component {

  who_mi: string = '2c2c029fbf13454a9f5af4358bc9c2b7'
  SignupForm: FormGroup;
  messages: any[] = [];
  chat: any;
  chatroom: any[] = [];


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
        let startIndex = Math.max(0, totalMessages - 5);
        this.messages = res.slice(startIndex);
       
      },
      error: err => {
        console.error("Error fetching messages:", err);
        // Handle the error as needed, e.g., show an error message to the user
      }
    });
  }


  // onSubmit() {
  //   const postMessage = {
  //     content: this.SignupForm.controls['msg'].value,
  //     user: "Administrator",
  //     room: "7c617ce66f2c4e45a1c12d4151e7ecd2",
  //     email: "Administrator",
  //   }

  //   const dddd = {
  //     content: postMessage.content,
  //     creation: new Date(),
  //     sender: postMessage.user,
  //     sender_email: postMessage.email
  //   }
  //   this.messages.push(dddd)

  //   this.chatmessageService.postMessages(postMessage).subscribe({

  //   });
  // }


  Onsubmit() {
    const postData = {
      content: this.SignupForm.controls['msg'].value,
      user: "2c2c029fbf13454a9f5af4358bc9c2b7",
      room: "7c617ce66f2c4e45a1c12d4151e7ecd2",
      email: "2c2c029fbf13454a9f5af4358bc9c2b7",
    }
    this.chatmessageService.postmsg(postData).subscribe({

      next: (res: any) => {
        const newMessage = {
          content: postData.content,
          creation: new Date(),
          sender: postData.user,
          sender_email: postData.email
        };
        this.messages.push(newMessage);
      },

    });
  }

  getroom() {
    let email = "2c2c029fbf13454a9f5af4358bc9c2b7"

    this.chatmessageService.getroom(email).subscribe(res => {

      this.chatroom = res

    });

  }

  convertDateTimeToHumanReadable(dateTimeString: string): string {
    const givenDateTime = new Date(dateTimeString);
    const now = new Date();

    const givenDate = new Date(givenDateTime.getFullYear(), givenDateTime.getMonth(), givenDateTime.getDate());
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const timeDifferenceInMilliseconds = now.getTime() - givenDateTime.getTime();
    const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60);

    if (timeDifferenceInMinutes < 1) {
        return "now";
    } else if (givenDate.getTime() === today.getTime()) {
        return "today";
    } else if (givenDate.getTime() === yesterday.getTime()) {
        return "yesterday";
    } else {
        return dateTimeString; // Or you can format it as needed
    }
}


}



