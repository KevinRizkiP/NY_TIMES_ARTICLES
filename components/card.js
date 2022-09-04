import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Cards(user) {
  // console.log(user);
  return (
    <div>
      <Card sx={{ maxWidth: 800 }} className="drop-shadow-xl">
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {/* {user.users.map((user) => ( 
              <p key={user.id}>{user.title}</p>
            ))} */}
            <a href={user.url}>{user.title}</a>
          </Typography>

          <Typography variant="h4" color="text.secondary">
            <p>{user.abstract}</p>
          </Typography>
          <div className="mt-3">
            <p>Section: {user.section}</p>
            <p>Type: {user.type}</p>
            <p>Published: {user.published_date}</p>
            <p>Updated: {user.updated}</p>
            <p>Source: {user.source}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
