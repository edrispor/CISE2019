import React from "react";

import Products from "../components/Products";

export default function Items() {
  return (
    <div>
      <p>
        This is All Items Page. Similar to tail -f, real-time tail displays
        recent logs and leaves the session open for real-time logs to stream in.
        By viewing a live stream of logs from your app, you can gain insight
        into the behavior of your live application and debug current problems.
        You can tail your logs using --tail (or -t). heroku logs --tail When you
        are done, press Ctrl+C to return to the prompt. A real-time tail session
        is automatically terminated after one hour of inactivity. Filtering If
        you only want to fetch logs with a certain source, a certain dyno, or
        both, you can use the --source (or -s) and --dyno (or -d) filtering
        arguments:
      </p>
      <Products></Products>
    </div>
  );
}
