FROM nginx:alpine
# Install LetsEncrypt (SSL)
RUN apk add python3 python3-dev build-base libressl-dev musl-dev libffi-dev
RUN pip install pip --upgrade
RUN pip install certbot-nginx
RUN mkdir /etc/letsencrypt
# Add Configuration for nginx
ADD ./nginx.conf /etc/nginx/nginx.conf
# Expose Ports
EXPOSE 80 443
# RUN
CMD tail -f /var/log/nginx/access.log


# Install SSL (Cert - Only do this Once - to Avoid Issues Mount Directory)
# ADD ./certs /etc/letsencrypt
# Renewal
# RUN mkdir /etc/cron.d/ -p
# RUN echo "0 12 * * * /usr/bin/certbot renew --quiet" > /etc/cron.d/renew.cron
# # Run & Generate SSL
# CMD certbot --nginx \
#   --non-interactive \
#   --agree-tos \
#   --email kyle@kderbyma.com \
#   --domains wetbat.kderbyma.com \
#   ; tail -f /var/log/nginx/access.log
