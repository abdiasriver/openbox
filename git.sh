#!/bin/bash
set -e
##################################################################################################################
# Author 	: 	Abdiasriver
# Website 	: 	https://www.axeso.red
##################################################################################################################
#
#   DO NOT JUST RUN THIS. EXAMINE AND JUDGE. RUN AT YOUR OWN RISK.
#
##################################################################################################################
git config --global user.name "abdiasriver"
git config --global user.email "abdias@alumnos.uaslp.edu.mx"
mkdir ~/.ssh
ls -al ~/.ssh
ssh-keygen -t rsa -b 4096 -C "abdias@alumnos.uaslp.edu.mx"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
xclip -sel clip < ~/.ssh/id_rsa.pub
echo "################################################################"
echo "###################    T H E   E N D      ######################"
echo "################################################################"
