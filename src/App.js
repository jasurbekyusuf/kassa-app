import {Link, Switch, Route} from "react-router-dom";
import Kassa from "./page/Kassa";
import User from "./page/User";
import Kirim from "./page/Kirim";
import Chiqim from "./page/Chiqim";
function App(){

    return <div className={'container'}>
<div className="row mt-3">
    <div className="col-md-10 offset-1 d-flex justify-content-around">
        <Link to={'/kassa'}><button className={'btn btn-success'}>Kassa</button> </Link>
        <Link to={'/foydalanuvchi'}><button className={'btn btn-info'}>Foydalanuvchi</button> </Link>
        <Link to={'/kirim'}><button className={'btn btn-primary'}>Kirim</button> </Link>
        <Link to={'/chiqim'}><button className={'btn btn-danger'}>Chiqim</button> </Link>

    </div>
</div>


                <Switch>
                    <Route path={'/kassa'} component={Kassa}/>
                    <Route path={'/foydalanuvchi'} component={User}/>
                    <Route path={'/kirim'} component={Kirim}/>
                    <Route path={'/chiqim'} component={Chiqim}/>
                </Switch>

    </div>

}
export default App;