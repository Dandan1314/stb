import { React, PageEvent } from "stb/component";
import { MType } from "..";
import { PageControl } from "../control/page";
import { tips, log } from "../com_import";

interface IIndexProps {
    identCode: MType.Index;
    event: PageEvent;
    con: PageControl;
}
interface IIndexState {
}

export class IndexModule extends React.Component<IIndexProps, IIndexState>{
    private readonly con = this.props.con;

    constructor(props: IIndexProps) {
        super(props);
        this.state = {
        }
        this.con.initIndex = this.initView;
    }
    protected render() {
        return (
            <div class="content">
                <span>Hello EPG!</span>
            </div>
        )
    }
    private initView = () => {
        // TODO
    }
}