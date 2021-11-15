public enum RoomAvailableOption
{
All,
AvailableOnly,
NotAvailableOnly
}
public class RoomSearchFilter
{
RoomAvailableOption enforcedOption;
public RoomSearchFilter(RoomAvailableOption enforcedOption)
{
this.enforcedOption = enforcedOption;
}
public bool IncludeInFinalResults(Room room,RoomAvailableOption enforcedOption)
{
bool isAvailable = CheckIfRoomAvailable(room);
switch (enforcedOption)
{
case enforcedOption.All: return true;
case enforcedOption.AvailableOnly: return isAvailable;
case enforcedOption.NotAvailableOnly: return !isAvailable;
default: return true;
}
}
}