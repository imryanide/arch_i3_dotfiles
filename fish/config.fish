if status is-interactive
    # Commands to run in interactive sessions can go here
	set -g -x fish_greeting
	starship init fish | source

end


function fish_greeting
	macchina
	echo "Welcome, Rayan."
end

