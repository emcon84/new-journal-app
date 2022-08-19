import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNotes } from '../../store/journal';


export default function SideBarItem({ title = '', id, body, date, imageUrls = [] }) {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNotes({ title, body, id, date, imageUrls }))
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    return (
        <ListItem key={id}>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
