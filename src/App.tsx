import "./App.css";
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider
} from "react-query";
import { PostsConnector as ViewPostsConnector } from "./Posts/ViewPostsConnector";
import AddPostConnector from "./Posts/AddPostConnector";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";
import {
    useRecoilValue
} from "recoil";
import { lastActionAtom } from "./Posts/LastActionAtom";

const queryClient = new QueryClient();

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props,
    ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const App = () => {
    const lastAction = useRecoilValue(lastActionAtom);

    const padding = {
        padding: 5
    };


    return (
        <QueryClientProvider client={queryClient}>

            <Router>
                <div>
                    <Link style={padding} to="/">home</Link>
                    <Link style={padding} to="/page1">page1</Link>
                </div>

                <Routes>
                    <Route path="/page1" element={<AddPostConnector />} />
                    <Route path="/" element={<ViewPostsConnector />} />
                </Routes>


                <div>
                    <i>Demo app</i>
                </div>
            </Router>
            <Snackbar open={true} autoHideDuration={null}>
                <Alert severity="success" sx={{ width: "100%" }}>
                    Last action: {lastAction}
                </Alert>
            </Snackbar>

        </QueryClientProvider>
    );
};

export default App;
