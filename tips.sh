

#mount -o remount,size=2G /run/archiso/cowspace
cp -R .*
git clone https://github.com/helmuthdu/aui
git clone https://github.com/erikdubois/archopenbox

SigLevel = Optional TrustAll

pacaur -S kickshaw ob-autostart xdg-user-dirs-gtk-update
