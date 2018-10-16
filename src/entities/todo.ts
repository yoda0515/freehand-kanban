
import firebase from 'firebase';
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

export class Todo {
  public key: string;
  public title: string;
  public content: string;

  public static newInstance(title: string): Todo {
    const e = new Todo();
    e.title = title;
    return e;
  }

  public static ofFirebaseDoc(doc: QueryDocumentSnapshot): Todo {
    const e = new Todo();
    e.key = doc.id;
    const data: any = doc.data();
    e.title = data.title;
    e.content = data.content;
    return e;
  }
}
