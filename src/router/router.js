import { Route } from "wouter";
import ListOfGifs from '../components/listOfGifs/ListOfGifs';
import Home from '../pages/home/home';

export default function Routes() {
  return (
    <div>
      <Route path="" component={Home} />
      <Route path="/gif/:keyword" component={ListOfGifs} />
    </div>
  )
}